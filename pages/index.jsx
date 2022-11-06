import Head from 'next/head';
import PageForm from '../app/component/screens/PageForm/PageForm';


export default function Home({prop}) {
  // const postReg = async () => {
  //   const data = await fetch('http://localhost:3000/api/users/register', {
  //     method: 'POST', // or 'PUT'
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       name: 'test',
  //       email: 'test@',
  //     }),
  //   });
  //   const res = await data.json();
  //   console.log(res);
  // };
  // get();

  // const postLog = async () => {
  //   const data = await fetch('http://localhost:3000/api/users/login', {
  //     method: 'POST', // or 'PUT'
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       email: 'test@',
  //     }),
  //   });
  //   const res = await data.json();
  //   console.log(res);
  // };
  // postLog();

  // const postAdd = async () => {
  //   const data = await fetch('http://localhost:3000/api/cards', {
  //     method: 'POST', // or 'PUT'
  //     headers: new Headers({
  //       'Content-Type': 'application/json',
  //       Authorization:
  //         'Bearer ' +
  //         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN…TY4fQ.DFoOtOQ6gw1WQ-XUQ6vFF1KwzWFQiLLkPUagC1N3REM',
  //     }),
  //     body: JSON.stringify({
  //       word: 'test',
  //       translation: 'тест',
  //     }),
  //   });
  //   const res = await data.json();
  //   console.log(res);
  // };
  // postAdd();
  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN…TY4fQ.DFoOtOQ6gw1WQ-XUQ6vFF1KwzWFQiLLkPUagC1N3REM
  return (
    <div>
      <Head>
        <title>Add word to learn</title>
        <meta name="description" content="You can add words on this page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageForm />
    </div>
  );
}