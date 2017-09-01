import Head from 'next/head';

export default function Header() {
  return (
    <Head>
      <title>Katarina Ljungdahl | Developer</title>
      <meta charset="utf-8" />
      <meta http-equiv="Content-language" content="en" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content="Katarina Ljungdahl | Developer" />
      <meta property="og:description" content="Student at Medieinstitutet, aiming at becoming an awesome front-end developer."/>
      <meta property="og:image" content="../../static/media/cover.jpg" />
    </Head>
  );
}
