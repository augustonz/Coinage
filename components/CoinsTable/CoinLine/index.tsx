import { ReactElement } from 'react';
import styles from './styles.module.css';
import {coin} from '../';

export default function CoinLine({item}:{item:coin}) :ReactElement {

    return (
    <div className={styles.container}>
        <div id={styles.icon}>
            <img src={item.iconUrl} width='40px' height='40px'/>
        </div>
        <div style={{width:'20%'}}>
            <p style={{color:item.color?item.color:'black'}}>
            {item.name}
            </p>
        </div>
        <div style={{width:'40%',color:'#303030'}}>
            <p>
                U${parseFloat(item.price).toFixed(2)}
            </p>   
        </div>
        <div style={{width:'30%'}}>
            <p style={{color:parseFloat(item.change)>=0?'green':'red'}}>
                {parseFloat(item.change.slice(1)).toFixed(2)}%
            </p>
        </div>
    </div>
    );
}