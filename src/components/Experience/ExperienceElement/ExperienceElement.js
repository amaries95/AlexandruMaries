import ExperienceBullet from './ExperienceBullet/ExperienceBullet';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import style from './ExperienceElement.module.css';

export default function ExperienceElement()
{
    return (
        <div className={style.container}>
            <ExperienceBullet></ExperienceBullet>
            <ExperienceCard></ExperienceCard>
        </div>
    );
}