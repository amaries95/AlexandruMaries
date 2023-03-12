import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import style from './Option.module.css';

export default function Option(props)
{
    return (
    <div className={style.option}>
       <li>
        <HashLink smooth to={`#${props.text.toLowerCase() === 'home' ? ' ' : props.text.toLowerCase()}`}>
            <span>{props.text}</span>
        </HashLink>
        </li>
    </div>);
}