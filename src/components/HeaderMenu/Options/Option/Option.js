import { Link } from 'react-router-dom';
import style from './Option.module.css';

export default function Option(props)
{
    return (
    <div className={style.option}>
       <li>
        <Link to={`/AlexandruMaries/${props.text.toLowerCase() === 'home' ? ' ' : props.text.toLowerCase()}`}>
            <span className={style['full-text']}>{props.text}</span>
            <span className={style['short-text']}>{props.text.substring(0,3)}</span>
            <span className={style['hidden-text']}></span>
        </Link>
        </li>
    </div>);
}