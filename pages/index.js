import Header from '../components/Header/';
import Link from 'next/link';

export default () => (
  <div>
    <Header />
    <h2>This is the main page.</h2>
    <Link href="/about"><a>About</a></Link>
  </div>
);
