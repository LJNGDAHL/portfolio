import { Component } from 'react';
import Router from 'next/router';
import { CSSTransitionGroup } from 'react-transition-group';
// import WorkLink from '../WorkLink';

class Work extends Component {
  constructor() {
    super();
    this.state = {
      height: 0
    };
  }

  componentDidMount() {
    this.updateHeight();
  }

  componentDidUpdate() {
    this.updateHeight();
  }

  updateHeight() {
    if (this.state.height !== this.mainContainer.clientHeight) {
      this.setState({ height: this.mainContainer.clientHeight });
    }
  }

  handleClick = (e) => {
    e.preventDefault();

    // Enables link to single work page on reload (or if javascript is disabled)
    if (this.state.open) {
      Router.push('/');
    } else {
      Router.push(`/?workId=${this.props.id}`, `/work/${this.props.id}`);
    }
    this.setState({ open: !this.state.open });
  }

  render() {
    console.log(this.state.height);

    const detailedContent = this.state.open ? <p className="Work__detailed expanded">{this.props.content}</p> : <p className="Work__detailed"></p>;

    return (
      <div ref={ (mainContainer) => { this.mainContainer = mainContainer; } } className={this.state.open ? 'Work expanded' : 'Work'} >
        <div className="Work__textcontainer" >
          <h3 className="Work__headline">{ this.props.headline }</h3>
          <p className="Work__introduction">{ this.props.introduction }</p>
          <p className={this.state.open ? 'Work__detailed expanded' : 'Work__detailed'} >{this.props.content}</p>
          <a className="Work__link" href={`/work/${this.props.id}`} onClick={ this.handleClick }>{ this.state.open ? 'Close' : 'Read more' }</a>
        </div>
        <style jsx>{`
          .Work {
            background-color: inherit;
            color: inherit;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            width: 100%;
            position: relative;
          }

          .Work__headline {
            font-weight: 400;
            text-transform: uppercase;
            font-size: 3rem;
          }

          .Work__introduction, .Work__link {
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }

          .Work__link {
            display: block;
            text-align: center;
            margin-top: 1rem;
            text-decoration: none;
          }

          {/* TODO: This transition looks like shit.  */}
          .Work__detailed {
            max-height: 0;
            transition: max-height 450ms ease-in-out 75ms;
            overflow: hidden;
          }

          /* TODO: Figure out how to solve this without hardcoding  */}
          .Work__detailed.expanded {
            max-height: 300px;
          }

          .Work__textcontainer {
            border-bottom: 3px solid var(--black);
          }

          @media screen and (min-width: 600px) {
              .Work__textcontainer {
                width: 600px;
                margin: 0 auto;
              }
          }
        `}
        </style>
      </div>
    );
  }
}

export default Work;
