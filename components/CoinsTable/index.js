import {container} from './styles.module.css';
import CoinLine from './CoinLine';


export default function CoinsTable({data}) {
    return (
    <div className={container}>
        {data.map((item)=><CoinLine item={item} key={item.uuid}/>)}
    </div>
    );
}