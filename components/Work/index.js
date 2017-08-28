import { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import nanoraf from 'nanoraf';

import Global from '../Global';
import WorkLink from '../WorkLink';
import Tags from '../Tags';
import { toggleWork, workInView } from '../../actions';

import { inOrAboveView } from '../../utils';

class Work extends Component {
  // Expand work item on index.js
  handleClick = (e) => {
    e.preventDefault();
    this.props.dispatch(toggleWork(this.props.id));
    const index = this.props.open.indexOf(this.props.id);

    // Enables link to single work page on reload (or if javascript is disabled)
    if (index !== -1) {
      Router.push('/');
    } else {
      Router.push(`/?workId=${this.props.id}`, `/work/${this.props.id}`);
    }
  }

  componentDidMount() {
    /**
     * Check if component is in or above viewport on scroll.
     * When entering viewport, add component in list regarding
     * which Work components has entered viewport.
     */
    this.onscroll = nanoraf(() => {
      const index = this.props.inOrAboveView.indexOf(this.props.id);
      const notAdded = (index === -1);

      // Add Component in list, if not already added
      if (inOrAboveView(this.mainContainer) && notAdded) {
        this.props.dispatch(workInView(this.props.id));
        // Stop listening once component is added in list.
        window.removeEventListener('scroll', this.onscroll);
      }
    });

    window.addEventListener('scroll', this.onscroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onscroll);
  }

  render() {
    const work = this.props.works.find(item => item.id === this.props.id);
    const isOpen = (this.props.open.indexOf(this.props.id) !== -1);
    const hasBeenInView = (this.props.inOrAboveView.indexOf(this.props.id) !== -1);

    return (
      <div>
        <div ref={ (mainContainer) => { this.mainContainer = mainContainer; } } className={ hasBeenInView ? 'Work visible' : 'Work' }>
          <div className="WorkContent">
            <h3 className="u-fontL u-bold u-upperCase">{ work.headline }</h3>
            <p className="u-fontM u-marginBottom u-italic">{ work.introduction }</p>
            <p className={ isOpen ? 'Details expanded' : 'Details' } >{ work.content }</p>
            <WorkLink id={ this.props.id } onClick={ this.handleClick }>
              { isOpen ? 'Close' : 'Read More' }
            </WorkLink>
          </div>
          <div className="TagsContainer">
            <Tags tags={ work.tags } />
          </div>
          <Global />
          <style jsx>{`
            /**
             * Main Component Styling
             */
            .Work {
              background-color: var(--white);
              color: var(--black);
              margin: 7rem auto;
              width: 80vw;
              padding: 7rem 2rem 0;
              position: relative;
            }

            :global(.has-js) .Work.visible {
              animation-name: worksFadeIn;
              animation-duration: 800ms;
              animation-fill-mode: forwards;
            }

            /**
             * Sweet Yellow Box (only for appearance)
             */
            .Work::after {
              background-color: var(--yellow);
              content: "";
              width: 200px;
              height: 20rem;
              position: absolute;
              top: 2rem;
              z-index: -2;
            }

            :global(.has-js) .Work::after {
              opacity: 0;
            }

            :global(.has-js) .Work.visible::after {
              animation-name: worksFadeIn;
              animation-duration: 800ms;
              animation-delay: 200ms;
              animation-fill-mode: forwards;
            }

            /**
             * Text content in work component
             */
            .WorkContent {
              margin: 4rem auto;
              width: 100%;
            }

            :global(.has-js) .WorkContent {
              opacity: 0;
            }

            :global(.has-js) .Work.visible .WorkContent  {
              animation-name: worksFadeIn;
              animation-duration: 800ms;
              animation-fill-mode: forwards;
              animation-delay: 500ms;
            }

            /**
             * Tags Container
             */
            :global(.has-js) .TagsContainer {
              opacity: 0;
            }

            :global(.has-js) .Work.visible .TagsContainer  {
              animation-name: worksFadeIn;
              animation-duration: 800ms;
              animation-fill-mode: forwards;
              animation-delay: 1000ms;
            }

            /**
             * Details (is visible if user clicks on 'Read More')
             */
            .Details {
              max-height: 0;
              overflow: hidden;
              opacity: 0;
              padding-bottom: 2rem;
              transition: all 500ms ease-out 100ms;
            }

            .Details.expanded {
              max-height: 300px;
              opacity: 1;
            }


            {/* Used for sliding in content */}
            @keyframes worksFadeIn {
              0% {
                opacity: 0;
                transform: translateY(0);
              }
              100% {
                transform: translateY(-100px);
                opacity: 1;
              }
            }

            /**
             * Media Queries
             */
            @media screen and (min-width: 900px) {
              .WorkContent {
                margin: 5rem 2rem;
                width: 60%;
              }

              .TagsContainer {
                position: absolute;
                top: 18rem;
                right: 2rem;
              }
            }
          `}
          </style>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    inOrAboveView: state.works.inOrAboveView,
    open: state.works.open,
    works: state.works.items
  };
};

export default connect(mapStateToProps)(Work);
