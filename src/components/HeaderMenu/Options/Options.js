import Option from './Option/Option';
import style from './Options.module.css';

export default function Options(props)
{
    const HeaderOptions = ["HOME", "EXPERIENCE", "EDUCATION", "PROJECTS", "SKILLS", "RECOMMENDATION"];

    return(
        <ul className={style.options}>
            {HeaderOptions.map(option => 
                {
                    return <Option
                    key={Math.random()}
                    text={option}></Option>;
                })}
        </ul>
    );
}