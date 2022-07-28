import style from './Experience.module.css';
import ExperienceElement from './ExperienceElement/ExperienceElement';

export default function Experience(props)
{
    const experience = [
        {
            Company: 'PlainConcepts',
            Period: 'March 2022 - Present',
            Position: 'Full Stack Web Developer',
            Responsabilities: 'bla bla bla'
        },
        {
            Company: 'Robert Bosch',
            Period: 'Dec 2021 - March 2022',
            Position: 'Full Stack Web Developer',
            Responsabilities: 'bla bla bla'
        },
    ];

    return (
        <div className={style.container}>
            <h3>Work Experience</h3>
            {experience.map((exp) => (
                <ExperienceElement 
                key={Math.random()}
                Company={experience.Company}
                Period={experience.Period}
                Position={experience.Position}
                Responsabilities={experience.Responsabilities}/>
            ))}
        </div>
    );
}