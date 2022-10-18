import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Heading from '../app/component/layout/Heading';
import Head from 'next/head';
import { wrapper } from '../styles/404.module.scss';


const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <div className={wrapper}>
      <Head>
        <title>Error</title>
      </Head>
      <Heading color="red" fontSize="3em" text={'404'} />
      <Heading color="grey" fontSize="2em" tag="h2" text={'Something is wrong...'} />
    </div>
  );
};


export default Error;