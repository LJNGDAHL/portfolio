import Link from 'next/link';
import Header from '../components/Header';
import Works from '../components/Works';
import Global from '../components/Global';
import Footer from '../components/Footer';

export default function Main() {
  return (
    <div>
      <Header />
      <div className="Main">
        <h2>This is the main page.</h2>
        <Link href="/about"><a>About</a></Link>
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
