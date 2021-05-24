import styles from './styles.module.css';
import CoinLine from './CoinLine';

export interface coin {
    name:string,
    iconUrl:string,
    color:string,
    change:string,
    price:string,
    uuid: string
}

export default function CoinsTable({coins}:{coins:coin[]}) {
    return (
    <div className={styles.container}>
        {coins.slice(0,10).map((item)=><CoinLine item={item} key={item.uuid}/>)}
    </div>
    );
}