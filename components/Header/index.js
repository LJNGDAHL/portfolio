import Head from 'next/head';
import Video from '../Video';
import Anchor from '../Anchor';

export default function Header() {
  return (
    <div className="Header">
      <Head>
        <title>Katarina Ljungdahl | Portfolio</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" rel="stylesheet" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="Front">
        <div className="Headline">
          <div className="Navigation">
            <div className="Contacts">
              <h2 className="Contacts__headline">Get In Touch</h2>
              <a className="Contacts__link" href="mailto:hello@katarinaljungdahl.se?subject=Hello Developer!">hello@katarinaljungdahl.se</a>
              <a className="Contacts__link" href="tel:+46738427919">+46 (0) 73 842 79 19</a>
            </div>
          </div>
          <h1 className="Headline-name">Katarina Ljungdahl</h1>
          <h2 className="Headline-title">Developer</h2>
        </div>
        <Video />
      </div>
      <style jsx>{`
        .Front {
          display: flex;
          align-items: center;
          flex-direction: column;
          height: 100vh;
          width: 100vw;
          justify-content: center;
        }

        .Navigation {
          position: absolute;
          top: 0;
          right: 0;
          display: flex;
          padding: 1rem 2rem;
          width: 100vw;
          justify-content: flex-end;
        }

        .Navigation:not(:last-of-type) {
          margin-right: 2rem;
        }

        .Contacts {
          color: var(--white);
          margin-left: 2rem;
          text-align: right;
          line-height: 1.2;
          font-size: 0.9rem;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }

        .Contacts__headline {
          font-weight: 700;
          font-size: inherit;
        }

        .Contacts__link {
          display: block;
          text-decoration: none;
        }

        .Contacts__link:hover {
          color: var(--blue);
          transition: color 150ms ease;
        }

        .Headline-name {
          color: var(--white);
          font-family: 'Roboto', Helvetica, sans-serif;
          font-weight: 300;
          text-transform: uppercase;
          font-weight: 400;
          -webkit-font-smoothing: antialiased;
        }

        .Headline-title {
          font-family: 'Lazer84', 'Roboto', Helvetica, sans-serif;
          color: var(--blue);
          font-size: 8rem;
          margin: 0;
        }

      `}</style>
    </div>
  );
}
