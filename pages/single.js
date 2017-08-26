import { Component } from 'react';
import withRedux from 'next-redux-wrapper';

import initStore from '../store';
import { addWorks } from '../actions';

import Global from '../components/Global';
import Header from '../components/Header';
import content from '../content';
import Footer from '../components/Footer';

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
  }

  render() {
    return (
      <div>
        <Header />
        <h1 className="Headline">{ this.props.headline }</h1>
        <ul className="tagList">
          {this.props.tags.map(tag => (
            <li className="tag" key={ tag }>{ tag }</li>
          ))}
        </ul>
        <p className="Introduction">{ this.props.introduction }</p>
        <p>{ this.props.content }</p>
        <Footer />
        <Global />
      </div>
    );
  }
}

export default withRedux(initStore)(Single);
