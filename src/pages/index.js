import style from '@/styles/Home.module.css';
import Head from "next/head";

import Card from '../Components/Cards';


export default function Home() {
  return (
    <>
      <Head>
        <title>Biju da Ju</title>
        <meta name="description" content="Pagina da loja Biju da Ju" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={style.container}>
        <Card />
      </main>
    </>
  );
}
