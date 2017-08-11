import Header from '../components/Header/';
import Link from 'next/link';

export default () => (
  <div>
    <Header />
    <h2>This is the about page.</h2>
    <Link href="/"><a>Home</a></Link>
  </div>
);
