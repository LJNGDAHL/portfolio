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
              <p>Get In Touch</p>
              <p>hello@katarinaljungdahl.se</p>
              <p>+46 (0) 73 842 79 19</p>
            </div>
            {/* <Anchor url="/" className="Navigation-item" cssClass="Headline-link">Home</Anchor>
            <Anchor url="/about" cssClass="Headline-link">About</Anchor> */}
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

        .Contacts p:first-child {
          font-weight: 700;
        }

        .Headline-name {
          color: var(--white);
          font-family: 'Roboto', Helvetica, sans-serif;
          font-weight: 300;
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
