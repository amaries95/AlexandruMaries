import { Home } from 'react-ionicons';
import style from './Option.module.css';

export default function Option(props)
{
    return (
    <div className={style.option}>
       <li>
           <a href='#'>
               <span className={style['full-text']}>{props.text}</span>
               <span className={style['short-text']}>{props.text.substring(0,3)}</span>
               <span className={style['hidden-text']}>
                   <Home color='darkcyan'></Home>
                </span>
           </a>
        </li>
    </div>);
}