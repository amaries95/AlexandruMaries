import style from './Experience.module.css';
import ExperienceElement from './ExperienceElement/ExperienceElement';

export default function Experience(props)
{
    return (
        <div className={style.container}>
            <h3>Work Experience</h3>
            <ExperienceElement></ExperienceElement>
            <ExperienceElement></ExperienceElement>
            <ExperienceElement></ExperienceElement>
            <ExperienceElement></ExperienceElement>
            <ExperienceElement></ExperienceElement>
            <ExperienceElement></ExperienceElement>
        </div>
    );
}