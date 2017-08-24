import Global from '../components/Global';
import Header from '../components/Header';
import content from '../content';

const Single = props => (
  <div>
    <h1>hello {props.headline}</h1>
    <p>{props.introduction}</p>
    <Global />
  </div>
);

/* eslint-disable */
Single.getInitialProps = async function (context) {
  const { id } = context.query;
  return content.find(item => item.id === id);
}

export default Single;
