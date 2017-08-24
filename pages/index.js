import { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import fetch from 'isomorphic-unfetch'; // For using fetch in both client/server

import content from '../content'; // Is to be replaced with CMS in future
import { addGithubData } from '../actions';
import initStore from '../store';

import Global from '../components/Global';
import Header from '../components/Header';
import Statusbar from '../components/Statusbar';
import Work from '../components/Work';
import Footer from '../components/Footer';

let data;

class Index extends Component {
  static getInitialProps = async () => {
    const props = { works: content };

    /* If less then an hour since last fetch, return data stored on server.
     * This is due to limitations in Githubs open Api.
     */
    if (data && ((Date.now() - data.time) < 3600000)) {
      console.log('Using data stored locally');
    } else {
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

    return Object.assign(props, {
      github: data
    });
  };

  componentDidMount() {
    // Update redux with current data
    this.props.dispatch(addGithubData(this.props.github));
  }

  render() {
    return (
      <div>
        <Header />
        <div className='Main'>
          <Statusbar />
          { this.props.works.map(item => (
            <div className="Works" key={ item.id }>
              <Work
                headline={ item.headline }
                introduction={ item.introduction }
                id={ item.id }
                content={ item.content }/>
            </div>
          )) }
          <Footer />
        </div>
        <Global />
        <style jsx>{`
          .Main {
            background-color: var(--white);
            color: var(--black);
          }
        `}</style>
      </div>
    );
  }
}

export default withRedux(initStore)(Index);
