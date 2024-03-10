import style from '@/styles/Home.module.css';
import Head from "next/head";

import Card from '@/Components/Cards/card.js';
import profiles from '@/Data/data';

export default function Home() {
  return (
    <>

      <Head>
        <title>Biju da Ju</title>
        <meta name="description" content="Pagina da loja Biju da Ju" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="assets/linketree.svg" />
      </Head>

      <main className={style.container}>

        {profiles.map(
          (profile, index) =>

            <Card
              key={index}
              picture={profile.image}
              name={profile.name}
              title={profile.title}
              description={profile.description}
              icon={profile.icon}
              subtitle1={profile.subtitle1}
              description1={profile.description1}
              subtitle2={profile.subtitle2}
              description2={profile.description2}
              subtitle3={profile.subtitle3}
              description3={profile.description3}
              logo1={profile.logoInsta}
              instagram={profile.instagram}
              logo2={profile.logoWhats}
              whatsapp={profile.whatsapp}
              logo3={profile.logoLink}
              linketree={profile.linketree}
            />

        )}

      </main>

    </>
  );
}
