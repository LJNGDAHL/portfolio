import Head from 'next/head';

const Header = () => (
  <div>
    <Head>
      <title>Katarina Ljungdahl | Portfolio</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1 className="Headline">Katarina Ljungdahl</h1>
    <style jsx>{`
      .Headline {
        color: red;
      }
    `}</style>
  </div>
);

export default Header;
