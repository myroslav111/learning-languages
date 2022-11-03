import Head from 'next/head';
import PageCards from '../app/component/screens/PageCards/PageCards';

const CardsPage = ({ unauthCardsArr }) => {
  // console.log(unauthCardsArr);
  return (
    <div>
      <Head>
        <title>Cards with words</title>
        <meta name="description" content="Here are word cards" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageCards unauthCardsArrProp={unauthCardsArr} />
    </div>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:3000/api/unauthCards');
  const unauthCardsArr = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      unauthCardsArr,
    },
  };
}

export default CardsPage;
