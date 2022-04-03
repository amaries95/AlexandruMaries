import style from './Option.module.css';

export default function Option(props)
{
    return (
    <div className={style.option}>
       <li>
           <a href='#'>{props.text}</a>
        </li>
    </div>);
}