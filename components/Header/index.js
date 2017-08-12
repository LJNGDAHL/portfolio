import Head from 'next/head';

export default function Header() {
  return (
    <div className="Header">
      <Head>
        <title>Katarina Ljungdahl | Portfolio</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" rel="stylesheet" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <h1 className="Headline">Katarina Ljungdahl</h1>
        <h2 className="Work-title">Developer</h2>
      </div>

      <style jsx>{`
        .Header {
          height: 100vh;
          width: 100vw;
          background: url('../../static/img/placeholder.jpg') center center no-repeat;
          background-size: cover;
          padding: 2rem;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
        }

        .Headline {
          color: var(--white);
          font-family: 'Roboto', Helvetica, sans-serif;
          font-weight: 300;
        }
        .Work-title {
          font-family: 'Lazer84', 'Roboto', Helvetica, sans-serif;
          color: var(--blue);
          font-size: 8rem;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
