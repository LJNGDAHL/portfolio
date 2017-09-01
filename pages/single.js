import { Component } from 'react';
import withRedux from 'next-redux-wrapper';

import getPrismicContent from '../api';

import { hasJS, addWorks } from '../actions';
import initStore from '../store';

import Global from '../components/Global';
import Work from '../components/Work';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contacts from '../components/Contacts';
import ErrorMessage from '../components/ErrorMessage';
import WorkLink from '../components/WorkLink';

class Single extends Component {
  static getInitialProps = async ({ store }) => {
    const props = { works: {} };

    /**
     * get work items from Prismic,
     * and add them to Redux state.
     */
    try {
      const works = await getPrismicContent();
      store.dispatch(addWorks(works));
      props.works.items = works;
    } catch (error) {
      props.error = error;
    }

    return props;
  }

  /**
   * Add information about if javascript is enabled in Redux.
   * Also set html lang attribute to English before rendering.
   */
  componentWillMount() {
    this.props.dispatch(hasJS(typeof window !== 'undefined'));

    if (typeof window !== 'undefined') {
      document.querySelector('html').setAttribute('lang', 'en');
    }
  }

  render() {
    const id = this.props.url.query.id; // URL path, used to find current work item
    const work = this.props.works.items.find(item => item.slugs.includes(id));

    return (
      <div>
        <Header />
        <Contacts />
        <div className="Content">
          <div className="SingleLink">
            <WorkLink url='../' styles="Link Link--inverted">Go Home</WorkLink>
          </div>
          { this.props.error ?
            <div className="u-marginTopXL ErrorWrapper">
              <ErrorMessage />
            </div>
            :
            <div className="WorkContainer">
              <Work id={ work.slugs[0] } key={ work.id } single={ true } />
            </div>
          }
          <Footer />
        </div>
        <Global />
        <style jsx>{`
          .Content {
            min-height: 100vh;
          }

          /* Sweet yellow box, only for decoration */
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
            position: fixed;
            z-index: 100;
            width: 100%;
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
              bottom: 90%;
              margin-top: 1.5rem;
              position: relative;
              width: 12rem;
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
