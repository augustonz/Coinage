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
            <div className={styles.coinLine}>
                <div style={{width:'20%'}}>
                    <p>
                        Icon
                    </p>
                </div>
                <div style={{width:'20%'}}>
                    <p>
                        Name
                    </p>
                </div>
                <div style={{width:'35%'}}>
                    <p>
                        Price
                    </p>   
                </div>
                <div style={{width:'25%'}}>
                    <p>
                        Change
                    </p>
                </div>
            </div>
            {coins.map((item)=><CoinLine item={item} key={item.uuid}/>)}
        </div>
    );
}