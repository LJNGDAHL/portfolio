import { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import fetch from 'isomorphic-unfetch'; // For using fetch in both client/server

import content from '../content'; // Replace with CMS in future
import { addGithubData, addWorks } from '../actions';
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
        console.log('New fetch');
        const res = await fetch('http://dog.ceo/api/breeds/image/random');
        // const res = await fetch('https://api.github.com/users/LJNGDAHL/events?page=1&per_page=1');
        data = await res.json();
        data.time = Date.now();
      } catch (error) {
        props.error = error;
      }
    }

    // Use to check if Github data is already added in Redux
    const includesData = Object.prototype.hasOwnProperty.call(store.getState().githubData, 'data');

    // FIXME: Fix Github Data so that you dont have to call data.data.
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
  }

  // Use "has-js" to determine whether or not js is enabled. Used in styling.
  componentDidMount() {
    document.documentElement.classList.add('has-js');
  }


  render() {
    return (
      <div className="u-backgroundMidnight">
        <Hero />
        <div className="Content">
          { this.props.works.map(item => (
            <Work id={ item.id } key={ item.id } />
          )) }
          <Footer />
        </div>
        <Global />
        <style jsx>{`
          .Content {
            background-color: var(--greyish);
            color: var(--white);
            {/* top padding to make it work with absolute positioned hero */}
            padding-top: 100vh;
          }
          `}</style>
      </div>
    );
  }
}

export default withRedux(initStore)(Index);
