import { ReactChildren, ReactElement, useState } from 'react';
import styles from './styles.module.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface buttonProps {
    onClick: Function,
    children: ReactElement | String,
    loading: boolean,
    icon: IconProp
}

export default function MyButton({onClick,children,loading,icon}:buttonProps) {

    const [errorMsg,setErrorMsg] = useState();

    async function handleClick() {
        setErrorMsg((await onClick()).errorMsg)
        setTimeout(()=>setErrorMsg(undefined),5000);
    }

    return (
    <div className={styles.container}> 
        {errorMsg && <p className={styles.error}>{errorMsg}</p>}
        <button disabled={loading} className={loading?styles.myButton+' '+ styles.disabledButton:styles.myButton} onClick={handleClick}>
            <FontAwesomeIcon className={styles.icon} icon={loading?'circle-notch':icon} spin={loading}/>
            {loading?'Loading...':children}
        </button>
    </div>
    );
}