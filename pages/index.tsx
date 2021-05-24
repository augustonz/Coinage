import Head from 'next/head'
import {api} from './api/';
import styles from '../styles/Home.module.css'
import {useEffect,useState} from 'react';
import CoinsTable, { coin } from '../components/CoinsTable';

export default function Home({Coins,status}:{Coins:coin[],status:number}) {

  const [coins,setCoins]=useState(Coins);

  useEffect(()=>{
    const getCoins = setInterval(async function getCoinsData() {
        const response = await (await fetch('/api/coins')).json();
        setCoins(response.data.data.coins); 

    },10000);
    return ()=>clearInterval(getCoins);
  },[]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Coinage</title>
        <meta name="description" content="Get up-to-date info on popular Cryptocurrencies!" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Coinage
        </h1>

        <p className={styles.description}>
          Take a look at the most famous Crypto currencies
        </p>

        <CoinsTable coins={coins}/>
      </main>


      <footer className={styles.footer}>
        <p>Made by <a href='https://github.com/augustonz' style={{display:'inline',color:'Highlight'}}>Augusto Nunes Zacarias</a></p>
      </footer>
    </div>
  )
}

export async function getServerSideProps(context:any) {
  const {data,headers,status} = await api.get('coins');
  const Coins = data.data.coins;
  return {
    props: {Coins,status}, // will be passed to the page component as props
  }
}