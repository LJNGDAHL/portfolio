import { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import fetch from 'isomorphic-unfetch'; // For using fetch in both client/server

import content from '../content'; // Replace with CMS in future
import { hasJS, addGithubData, addWorks } from '../actions';
import initStore from '../store';

import Global from '../components/Global';
import Hero from '../components/Hero';
import Work from '../components/Work';
import Footer from '../components/Footer';

let data;

class Index extends Component {
  static getInitialProps = async ({ store }) => {
    const props = { works: content };

    /* If less then an hour since last fetch, return data stored on server.
     * This is due to limitations in Githubs open Api.
     */
    if (!data || !((Date.now() - data.time) < 3600000)) {
      try {
        const res = await fetch('https://api.github.com/users/LJNGDAHL/events?page=1&per_page=1');
        data = await res.json();
        data = data[0];
        data.time = Date.now();
      } catch (error) {
        props.error = error;
      }
    }

    // Check if Github data is already added in Redux
    const includesData = Object.prototype.hasOwnProperty.call(store.getState().githubData, 'data');

    // Dispatch action if Github data is not already added
    if (!includesData) {
      store.dispatch(addGithubData(data));
    }

    return Object.assign(props, {
      github: data
    });
  };

  /*
  * Add data and content in Redux so that
  * they are accessible in components further down.
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
      <div className={ this.props.hasJS ? 'has-js' : '' }>
        <Hero />
        <div className="Content">
          { this.props.works.map(item => (
            <Work id={ item.id } key={ item.id } single={ false } />
          )) }
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
