import Head from 'next/head'
import {useEffect,useState} from 'react';

import {api} from './api/';
import styles from '../styles/Home.module.css'

import CoinsTable, { coin } from '../components/CoinsTable';
import MyButton from '../components/MyButton';

export default function Home({Coins,error}:{Coins:coin[],error:boolean}) {

  const [coins,setCoins]=useState(Coins);
  const [size,setSize]=useState(10);
  const [Error,setError]=useState(error);
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    const getCoins = setInterval(async function getCoinsData() {
      const response = await fetch(`/api/coins?size=${size}`);
      const {data,error} = await response.json();
      if (error) {
        clearInterval(getCoins);
        setError(true);
        return;
      } else {
        setCoins(data.data.coins);
      }
      
    },8000);
    return ()=>clearInterval(getCoins);
  },[size]);

  async function loadMoreCoins() {
    if (size<100){
      setLoading(true);
      setSize((size)=>size+10);
      const response = await (await fetch(`/api/coins?size=${size+10}`)).json();
      setCoins(response.data.data.coins); 
      setLoading(false);
      return {errorMsg:undefined};
    } else {
      return {errorMsg:'Max coins size reached'};
    }
    
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Coinage</title>
        <meta name="description" content="Get up-to-date info on popular Cryptocurrencies!" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Coinage
        </h1>

        <p className={styles.description}>
          Take a look at the most famous Crypto currencies
        </p>

        {Error?<h1>Oops. The site can't access the crypto API<br/> at the moment, come back later</h1>:
        <>
          <CoinsTable coins={coins}/>
          <MyButton onClick={loadMoreCoins} loading={loading}>Load more</MyButton>
        </>}
      </main>


      <footer className={styles.footer}>
        <p>Made by <a href='https://github.com/augustonz' style={{display:'inline',color:'Highlight'}}>Augusto Nunes Zacarias</a></p>
      </footer>
    </div>
  )
}

export async function getServerSideProps(context:any) {
  try{
    const {data,headers,status} = await api.get('coins?limit=10');
    const Coins = data.data.coins;
    return {
      props: {Coins,error:false}, // will be passed to the page component as props
    }
  } catch(error:any) {
    console.log(error);
    return {
      props: {Coins:[],error:true}
    }
  }
}