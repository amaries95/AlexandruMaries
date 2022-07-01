import ProgressBar from './ProgressBar/ProgressBar';
import style from './Skill.module.css';

export default function Skill(props)
{
    return (
        <div className={style.container}>
                <p className={style['skill-name']}>React</p>
                <p className={style.percentage}>85%</p>

               <ProgressBar/>
                
        </div>
        
    );
}