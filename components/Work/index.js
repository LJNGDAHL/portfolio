import { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import Global from '../Global';
import WorkLink from '../WorkLink';
import Tags from '../Tags';
import { toggleWork, workInView } from '../../actions';

import { debounce, inOrAboveView } from '../../utils';

class Work extends Component {
  // Expand work item on index.js
  handleClick = (e) => {
    e.preventDefault();
    this.props.dispatch(toggleWork(this.props.id));

    // TODO: Refactor!
    const index = this.props.open.indexOf(this.props.id);

    // Enables link to single work page on reload (or if javascript is disabled)
    if (index !== -1) {
      Router.push('/');
    } else {
      Router.push(`/?workId=${this.props.id}`, `/work/${this.props.id}`);
    }
  }

  /**
   * Check if component is in or above viewport on scroll.
   * When entering viewport, add component in list regarding
   * which Work components has entered viewport.
   */
  hasEnteredView = () => {
    const index = this.props.inOrAboveView.indexOf(this.props.id);
    const notAdded = (index === -1);

    // Add Component in list, if not already added
    if (inOrAboveView(this.mainContainer) && notAdded) {
      this.props.dispatch(workInView(this.props.id));
      // Stop listening once component is added in list.
      window.removeEventListener('scroll', debounce(this.hasEnteredView));
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', debounce(this.hasEnteredView, 50));
  }

  render() {
    const work = this.props.works.find(item => item.id === this.props.id);
    const isOpen = (this.props.open.indexOf(this.props.id) !== -1);
    const hasBeenInView = (this.props.inOrAboveView.indexOf(this.props.id) !== -1);

    return (
      <div ref={ (mainContainer) => { this.mainContainer = mainContainer; } } className={ isOpen ? 'Work expanded' : 'Work' } >
        <div className={ hasBeenInView ? 'Work__textcontainer visible' : 'Work__textcontainer' } >
          <h3 className="u-fontL u-semiBold u-upperCase u-colorCarmine">{ work.headline }</h3>
          <Tags tags={ work.tags } />
          <p className="u-fontM u-marginBottom">{ work.introduction }</p>
          <p className={ isOpen ? 'Work__detailed expanded' : 'Work__detailed' } >{ work.content }</p>
          <WorkLink id={ this.props.id } onClick={ this.handleClick }>
            { isOpen ? 'Close' : 'Read More' }
          </WorkLink>
        </div>
        <Global />
        <style jsx>{`
          .Work {
            background-color: inherit;
            color: inherit;
            width: 100%;
            padding: 2rem;
          }

          .Work__detailed {
            max-height: 0;
            overflow: hidden;
            opacity: 0;
            transition: max-height 500ms ease-out 100ms, opacity 500ms ease-out 100ms;
          }

          .Work__detailed.expanded {
            max-height: 300px;
            opacity: 1;
          }

          {/* TODO: Right now, this applies to CSS even when javascript disabled.  */}
          .Work__textcontainer {
            margin: 3rem auto;
            opacity: 0;
            transform: translateY(0);
            transition: all 250ms ease-in;
          }

          .Work__textcontainer.visible {
            transform: translateY(-50px);
            opacity: 1;
          }

          @media screen and (min-width: 650px) {
              .Work__textcontainer {
                width: 650px;
              }
          }
        `}
        </style>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    works: state.works.items,
    open: state.works.open,
    inOrAboveView: state.works.inOrAboveView
  };
};

export default connect(mapStateToProps)(Work);
