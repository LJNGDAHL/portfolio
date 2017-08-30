import { Component } from 'react';
import withRedux from 'next-redux-wrapper';

import content from '../content'; // Replace with CMS in future
import { hasJS, addWorks } from '../actions';
import initStore from '../store';

import Global from '../components/Global';
import Work from '../components/Work';
import Header from '../components/Header';
import Contacts from '../components/Contacts';
import WorkLink from '../components/WorkLink';


class Single extends Component {
  static getInitialProps = async (context) => {
    const { id } = context.query;
    return content.find(item => item.id === id);
  }

  /*
  * Add content in Redux so that it is
  * accessible in components furthter down.
  */
  componentWillMount() {
    this.props.dispatch(addWorks(content));
    this.props.dispatch(hasJS(typeof window !== 'undefined'));

    if (typeof window !== 'undefined') {
      document.querySelector('html').setAttribute('lang', 'en');
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Contacts />
        <div className="Content">
          <div className="SingleLink">
            <WorkLink url='../' negativeStyling={ true }>Go Home</WorkLink>
          </div>
          <div className="WorkContainer">
            <Work id={ this.props.id } key={ this.props.id } single={ true } />
          </div>
        </div>
        <Global />
        <style jsx>{`
          .Content {
            min-height: 100vh;
          }

          {/* Sweet yellow box, only for decoration */}
          .Content::after {
            animation: single 1000ms 700ms forwards var(--slide);
            background-color: var(--transparentYellow);
            content: "";
            width: 70vw;
            height: 90vh;
            margin: 2rem 1rem;
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            z-index: -2;
          }

          .SingleLink {
            animation: single 1000ms 1000ms forwards var(--slide);
            bottom: 0;
            color: var(--white);
            opacity: 0;
            width: 100%;
            position: fixed;
            z-index: 100;
          }

          .WorkContainer {
            animation: single 1000ms 200ms forwards var(--slide);
            opacity: 0;
            position: relative;
          }

          @keyframes single {
            0% {
              opacity: 0;
              transform: translateY(50%);
            }
            100% {
              opacity: 1;
              transform: none
            }
          }

          @media screen and (min-width: 600px) {
            .SingleLink {
              margin-top: 1.5rem;
              position: relative;
              bottom: 90%;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default withRedux(initStore, state => ({
  hasJS: state.hasJS
}))(Single);
