import style from './HeaderMenu.module.css';
import Option from './Option/Option';
import img from './photo.JPG';

export default function HeaderMenu(props)
{
    const HeaderOptions = ["HOME", "EXPERIENCE", "EDUCATION", "PROJECTS", "SKILLS", "RECOMMENDATION"]

    return <div className={style.header}>
        <img src={img}></img>
        <ul>
            {HeaderOptions.map(option => 
                {
                    return <Option text={option}></Option>;
                })}
        </ul>
    </div>;
}