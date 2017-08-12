import Head from 'next/head';
import Video from '../Video/';

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
          <h1 className="Headline-name">Katarina Ljungdahl</h1>
          <h2 className="Headline-title">Developer</h2>
        </div>
        <Video />
      </div>
      <style jsx>{`
        .Header {
            height: 100vh;
            width: 100vw;
        }

        .Front {
          position: fixed;
          width: 100vw;
          height: 100vh;
          left: 0;
          top: 0;
          z-index: -1;
          padding: 2rem;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
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
