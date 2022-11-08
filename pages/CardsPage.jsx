import Head from 'next/head';
import PageCards from '../app/component/screens/PageCards/PageCards';

const CardsPage = ({ unauthCardsArr, cardsArr, propIsUser }) => {
  console.log('isUser', cardsArr);

  return (
    <div>
      <Head>
        <title>Cards with words</title>
        <meta name="description" content="Here are word cards" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageCards cardsArrProp={propIsUser ? cardsArr : unauthCardsArr} />
    </div>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:4000/api/unauthCards');
  const unauthCardsArr = await res.json();

  const response = await fetch('http://localhost:4000/api/cards');
  const cardsArr = await response.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      unauthCardsArr,
      cardsArr,
    },
  };
}

export default CardsPage;
