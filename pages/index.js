import { Component } from 'react';
import fetch from 'isomorphic-unfetch'; // For using fetch in both client/server

import withRedux from 'next-redux-wrapper';
import initStore from '../store';
import { hasJS, addGithubData, addWorks } from '../actions';

import getPrismicContent from '../api';

import Global from '../components/Global';
import Hero from '../components/Hero';
import Work from '../components/Work';
import ErrorMessage from '../components/ErrorMessage';
import Footer from '../components/Footer';

let data;

class Index extends Component {
  static getInitialProps = async ({ store }) => {
    const state = store.getState();
    const props = { works: {} };

    try {
      let works = state.works.items;

      // If works aren't already fetched, get them from Prismic.
      if (!works.length) {
        works = await getPrismicContent();
        store.dispatch(addWorks(works));
      }

      props.works.items = works;

      /* If less then an hour since last fetch, return data stored on server.
      * This is due to fetching limitations in Githubs open Api.
      */
      if (!data || !((Date.now() - data.time) < 3600000)) {
        const res = await fetch('https://api.github.com/users/LJNGDAHL/events?page=1&per_page=1');
        data = await res.json();
        data = data[0];
        data.time = Date.now();
      }
    } catch (error) {
      props.error = error;
    }

    // Dispatch action if Github data is not already added
    store.dispatch(addGithubData(data));

    return Object.assign(props, {
      githubData: data
    });
  };

  /*
  * Add data and content in Redux so that
  * they are accessible in components further down.
  */
  componentWillMount() {
    this.props.dispatch(hasJS(typeof window !== 'undefined'));

    if (typeof window !== 'undefined') {
      document.querySelector('html').setAttribute('lang', 'en');
    }
  }

  render() {
    return (
      <div className={ this.props.hasJS ? 'has-js' : '' }>
        <Hero />
        <div className="Content">
          { this.props.error ?
            <ErrorMessage />
            :
            this.props.works.items.map(item => (
              <Work id={ item.slugs[0] } key={ item.id } single={ false } />
            ))
          }
          <Footer />
        </div>
        <Global />
        <style jsx>{`
          .Content {
            color: var(--white);
            padding-top: 90vh;
          }

          @media screen and (min-width: 600px) {
            .Content {
              padding-top: 120vh;
            }
          }

          @media screen and (min-width: 1200px) {
            .Content {
              padding-top: 150vh;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default withRedux(initStore, state => ({
  hasJS: state.hasJS
}))(Index);
