import { ReactChildren, useState } from 'react';
import styles from './styles.module.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';

export default function MyButton({onClick,children,loading}:{onClick:CallableFunction,loading:boolean,children:string | ReactChildren}) {

    const [errorMsg,setErrorMsg] = useState();

    async function handleClick() {
        setErrorMsg((await onClick()).errorMsg)
        setTimeout(()=>setErrorMsg(undefined),5000);
    }

    return (
    <div className={styles.container}> 
        {errorMsg && <p className={styles.error}>{errorMsg}</p>}
        <button disabled={loading} className={loading?styles.myButton+' '+ styles.disabledButton:styles.myButton} onClick={handleClick}>
            {loading?'Loading...':children}
            {loading && <FontAwesomeIcon className={styles.icon} icon={faCircleNotch} spin/>}
        </button>
    </div>
    );
}