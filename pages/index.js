import Link from 'next/link';
import Header from '../components/Header';
import Works from '../components/Works';
import Global from '../components/Global';
import Footer from '../components/Footer';

export default function Main() {
  return (
    <div>
      <Header />
      <h2>This is the main page.</h2>
      <Link href="/about"><a>About</a></Link>
      <Works />
      <Footer />
      <Global />
    </div>
  );
}
