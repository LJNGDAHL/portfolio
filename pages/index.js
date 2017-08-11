import Link from 'next/link';
import Header from '../components/Header';
import Global from '../components/Global';

export default () => (
  <div>
    <Header />
    <h2>This is the main page.</h2>
    <Link href="/about"><a>About</a></Link>
    <Global />
  </div>
);
