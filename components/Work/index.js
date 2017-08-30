import { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import nanoraf from 'nanoraf';

import { toggleWork, workInView } from '../../actions';
import { inOrAboveView } from '../../utils';

import Global from '../Global';
import ExternalLink from '../ExternalLink';
import Decoration from '../Decoration';
import WorkLink from '../WorkLink';
import Tags from '../Tags';

/**
 * The main component in portfolio.
 * Used to display different works.
 */
class Work extends Component {
  // Prevents routing to single.js if javascript is enabled
  handleClick = (e) => {
    e.preventDefault();
    this.props.dispatch(toggleWork(this.props.id));
    const index = this.props.open.indexOf(this.props.id);

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
    const oddItem = ((this.props.works.indexOf(work) % 2) !== 0);

    let decorationStyles = 'Decoration';
    let linkStyles = 'Link';
    let workStyles = 'Work';

    /* Odd items get inverted styling */
    if (oddItem) {
      decorationStyles += ' Decoration--inverted';
      workStyles += ' Work--inverted';
      linkStyles += ' Link--inverted';
    }

    if (hasBeenInView) {
      workStyles += ' Work--visible';
      decorationStyles += ' Decoration--visible';
    }

    if (this.props.single) {
      decorationStyles += ' Decoration--single';
    }

    return (
      <div>
        <div>
          <div ref={ (mainContainer) => { this.mainContainer = mainContainer; } } className={ workStyles }>
            <ExternalLink url={ work.link }>{ work.link }</ExternalLink>
            <Decoration styles={ decorationStyles } />

            <div className="WorkContent">
              <h3 className="u-fontL u-bold u-upperCase">{ work.headline }</h3>
              <p className="u-fontM u-marginBottom u-italic">{ work.introduction }</p>

              {/* When on single page, details is always visible  */}
              { this.props.single ?
                <p className="Details--single">{ work.content }</p>
                :
                <div>
                  <p className={ isOpen ? 'Details Details--visible' : 'Details' } >{ work.content }</p>
                  <WorkLink
                    url={`/work/${this.props.id}`}
                    id={ this.props.id }
                    onClick={ this.handleClick }
                    styles={ linkStyles } >
                    { isOpen ? 'Close' : 'Read More' }
                  </WorkLink>
                </div>
              }

            </div>
            <div className="TagsContainer">
              <Tags styles={ oddItem } tags={ work.tags } />
            </div>
          </div>
          <Global />
          <style jsx>{`
            /**
             * 1. Compensation due to not animating when js is disabled.
             */
            .Work {
              background-color: var(--white);
              color: var(--black);
              margin: 7rem auto;
              width: 80vw;
              padding: calc(7rem - 100px) 2rem 0; /* 1 */
              position: relative;
            }

            :global(.has-js) .Work {
              padding: 7rem 2rem 0;
            }

            .Work--inverted {
              background-color: var(--black);
              color: var(--white);
            }

            :global(.has-js) .Work--visible {
              animation: works 800ms forwards var(--slide);
            }

            /**
             * Text content in work component
             * 1. Compensation due to not animating when js is disabled.
             */
            .WorkContent {
              margin: 2rem auto;
              position: relative;
              padding-bottom: 100px; /* 1. */
              width: 100%;
              z-index: 2;
            }

            :global(.has-js) .WorkContent {
              opacity: 0;
              padding-bottom: 0;
            }

            :global(.has-js) .Work--visible .WorkContent  {
              animation: works 1000ms 500ms forwards var(--slide);
            }

            /**
             * Tags Container
             */
            :global(.has-js) .TagsContainer {
              opacity: 0;
            }

            :global(.has-js) .Work--visible .TagsContainer  {
              animation: works 800ms 1000ms forwards var(--slide);
            }

            /**
             * Details (visible if user clicks on 'Read More')
             */
            .Details {
              max-height: 0;
              overflow: hidden;
              opacity: 0;
              transition: all 600ms ease-in 100ms;
            }

            .Details--visible {
              margin-bottom: 2rem;
              max-height: 300px;
              opacity: 1;
            }

            /**
             * When used on single.js, extra padding is needed.
             */
            .Details--single {
              padding-bottom: 7rem;
            }

            @keyframes works {
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

              /*
              * 1. Compensation due to not animating when js is disabled.
              */
              .TagsContainer {
                position: absolute;
                top: calc(18rem - 100px); /* 1. */
                right: 2rem;
              }

              :global(.has-js) .TagsContainer {
                top: 18rem;
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
