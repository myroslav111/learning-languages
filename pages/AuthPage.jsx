import Head from 'next/head';
import PageAuth from '../app/component/screens/PageAuth/PageAuth';


const AuthPage = () => {
  return (
    <div>
      <Head>
        <title>Authorization</title>
        <meta name="description" content="Please authorizate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageAuth/>
      
    </div>
  );
};


export default AuthPage;