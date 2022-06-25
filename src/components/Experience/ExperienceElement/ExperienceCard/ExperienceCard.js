import style from './ExperienceCard.module.css';

export default function ExperienceCard()
{
    return (
        <div className={style.container}>
            <div className={style['details']}>
                <p className={style['company-name']}>Robert Bosch</p>
                <p className={style['period-of-time']}>-</p>
                <p className={style['period-of-time']}>Dec 2021 - Aug 2022 (6 months)</p>
                <p className={style.role}>Full Stack Web Developer</p>
                <div className={style.description}>
                    <ul>
                        <li>Technologies</li>
                        <li>Project</li>
                        <li>Responsabilities</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}