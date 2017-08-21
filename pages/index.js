import { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import fetch from 'isomorphic-unfetch'; // A lib for using fetch in both client/server.
import Header from '../components/Header';
import Works from '../components/Works';
import Global from '../components/Global';
import Statusbar from '../components/Statusbar';
import Footer from '../components/Footer';

import { addGithubData } from '../actions';
import initStore from '../store';

class Home extends Component {
  // FIXME: Right now, the component does not read from sessionStorage.
  // FIXME: Do we need to have a timeout on how long to work on this?
  static getInitialProps = async () => {
    try {
      // Make a request on the server
      if (!process.browser) {
        // const res = await fetch('https://api.github.com/users/LJNGDAHL/events?page=1&per_page=1');
        const res = await fetch('http://dog.ceo/api/breeds/image/random');
        const data = await res.json();
        return { data };
      }
      // Get data from sessionStorage when in client
      const data = JSON.parse(sessionStorage.getItem('githubData'));
      return { data };
    } catch (error) {
      return { error };
    }
  };

  componentDidMount() {
    if (process.browser) {
      if (!sessionStorage.getItem('githubData')) {
        sessionStorage.setItem('githubData', JSON.stringify(this.props.data));
      }
    }

    this.props.dispatch(addGithubData(this.props.data));
  }

  render() {
    // Only render statusbar if no error occurs while fetching data
    // TODO: Get props.data with connect instead of passing them down.
    const statusbar = !this.props.error ? <Statusbar/> : '';

    return (
      <div>
        <Header />
        <div className='Main'>
          {statusbar}
          <Works />
          <Footer />
        </div>
        <Global />
        <style jsx>{`
          .Main {
            background-color: var(--white);
          }
        `}</style>
      </div>
    );
  }
}

Home = withRedux(initStore, state => ({
  foo: state.foo,
  addGithubData: state.addGithubData
}))(Home);

export default Home;
