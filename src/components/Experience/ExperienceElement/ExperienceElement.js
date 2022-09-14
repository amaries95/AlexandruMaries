import ExperienceBullet from './ExperienceBullet/ExperienceBullet';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import style from './ExperienceElement.module.css';

export default function ExperienceElement(props)
{
    return (
        <div className={style.container}>
            <ExperienceBullet></ExperienceBullet>
            <ExperienceCard 
                Company={props.Company}
                Period={props.Period}
                Position={props.Position}
                Responsabilities={props.Responsabilities}/>
        </div>
    );
}