import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

import * as api from '../services/api';

import CoinsTable from '../components/CoinsTable';

export default function Home({coins}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coinage</title>
        <meta name="description" content="Get up-to-date info on popular Cryptocurrencies!" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <CoinsTable data={coins}/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const response = await api.getCoins();
  const coins = response.data.data.coins;
  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {coins:coins}
  }
}