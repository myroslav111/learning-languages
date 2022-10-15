import Head from 'next/head';
import PageCards from '../app/component/screens/PageCards/PageCards';

const CardsPage = () => {
  return (
    <div>
      <Head>
        <title>Cards with words</title>
        <meta name="description" content="Here are word cards" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageCards />
    </div>
  );
};

export default CardsPage;
