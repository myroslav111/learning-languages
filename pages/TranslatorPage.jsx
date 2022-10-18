import PageTranslator from '../app/component/screens/PageTranslator/PageTranslater';
import Head from 'next/head';

const TranslatorPage = () => {
  return (
    <div>
      <Head>
        <title>Translator</title>
        <meta name="description" content="Translator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTranslator />
    </div>
  );
};

export default TranslatorPage;
