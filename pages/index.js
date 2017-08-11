import Header from '../components/Header/';
import Link from 'next/link';

export default () => (
  <div>
    <Header />
    <h2>This is the main page.</h2>
    <Link href="/about"><a>About</a></Link>
    <style jsx global>{`
      :root {
        --black: #212123;
        --blue: #03E9F8;
        --white: #F2F2F2;
      }
      { /* Only temporary styling */ }
      * {
        font-family: 'Roboto', 'sans-serif';
        background-color: var(--white);
        color: var(--black);
      }

      @font-face {
        font-family: 'Lazer84';
        src: url('../static/fonts/lazer84-webfont.woff2') format('woff2'),
            url('../static/fonts/lazer84-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
      }
    `}</style>
  </div>
);
