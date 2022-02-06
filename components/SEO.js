import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <link rel="alternate icon" class="js-site-favicon" type="image/png" href="https://s4.ax1x.com/2022/02/07/HMP7VI.png">
    </Head>
  );
}
