import { ReactElement } from 'react';
import styles from './styles.module.css';
import {coin} from '../';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretUp,faCaretDown} from '@fortawesome/free-solid-svg-icons';
// @ts-ignore
import AnimatedNumber from 'react-animated-number';

export default function CoinLine({item}:{item:coin}) :ReactElement {

    return (
    <div className={styles.container}>
        <div id={styles.icon}>
            <img src={item.iconUrl} width='40px' height='40px'/>
        </div>
        <div style={{width:'20%'}}>
            <p style={{color:item.color?item.color:'#303030'}}>
            {item.name}
            </p>
        </div>
        <div style={{width:'35%',color:'#303030'}}>
            <p>
                $<AnimatedNumber
                value={parseFloat(item.price)} 
                duration={1000}
                formatValue={(val:number)=>val.toFixed(2).toString().replace('.',',')}/>
            </p>   
        </div>
        <div style={{width:'25%'}}>
            {item.change?
            <p style={{color:parseFloat(item.change)>=0?'green':'red'}}>
                <FontAwesomeIcon className={styles.arrowIcon} icon={parseFloat(item.change)>=0?faCaretUp:faCaretDown}/>
                <AnimatedNumber value={parseFloat(item.change)} 
                duration={1000}
                formatValue={(val:number)=>val.toFixed(2).toString()} />%
            </p>:<p style={{color:'#303030'}}>---</p>}
        </div>
    </div>
    );
}