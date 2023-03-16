import style from './ExperienceCard.module.css';

export default function ExperienceCard(props)
{
    return (
            <div className={style.container}>
                <div className={style['details']}>
                    <p className={style['role']}>{props.Position} at&nbsp;</p>
                    <p className={style['company-name']}>{props.Company}</p>
                    <p className={style['period-of-time']}>{props.Period}</p>
                    <div className={style.description}>
                        <ul>
                            {props.Responsabilities.map((resp) => (
                                <li key={Math.random()}>{resp}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
    );
}