import {container,icon} from './styles.module.css';

export default function CoinLine({item}) {
    console.log(item);
    return (
    <div className={container}>
        <div className={icon}>
            <img src={item.iconUrl} width='40px' height='40px'/>
        </div>
        <div>
            {item.name}
        </div>
        <div>   
            {item.price}
        </div>
    </div>
    );
}