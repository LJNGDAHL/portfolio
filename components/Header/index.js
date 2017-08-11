import Head from 'next/head';

const Header = () => (
  <div>
    <Head>
      <title>Katarina Ljungdahl | Portfolio</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700" rel="stylesheet" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1 className="Headline">Katarina Ljungdahl</h1>
    <h2 className="Work-title">Developer</h2>
    <style jsx>{`
      .Headline {
        font-family: 'Roboto', Helvetica, sans-serif;
        font-weight: 300;
        margin: 2rem 0 0;
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

export default Header;
