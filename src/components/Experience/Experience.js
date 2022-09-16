import style from './Experience.module.css';
import ExperienceElement from './ExperienceElement/ExperienceElement';

export default function Experience(props)
{
    const experience = [
        {
            Company: 'Plain Concepts',
            Period: 'March 2022 - Present',
            Position: 'Full Stack Web Developer',
            Responsabilities: [
                'developing new features on frontend and backend side',
                'fixing UI and functionality bugs',
                'interviewing new candidates',
                'planning and estimating new features',
                'unit and integration testing',
                'customer service'
            ]
        },
        {
            Company: 'Robert Bosch',
            Period: 'Dec 2021 - March 2022',
            Position: '.Net Web Developer',
            Responsabilities: [
                'unit testing',
                'refactoring'
            ]
        },
        {
            Company: 'Robert Bosch',
            Period: 'Jan 2020 - Dec 2021',
            Position: '.Net Desktop Developer',
            Responsabilities: [
                'developed backend and UI features',
                'code reviews',
                'manual UI, unit and integration testing',
                'bug fixing',
                'manual release'
            ]
        },
        {
            Company: 'Robert Bosch',
            Period: 'Aug 2018 - Jan 2020',
            Position: 'Software Embedded Engineer',
            Responsabilities: [
                'agile methodology',
                'developed features based on requirements',
                'fixing QAC warning in C++'
            ]
        },
        {
            Company: 'Robert Bosch',
            Period: 'Jul 2017 - Aug 2018',
            Position: 'Working Student',
            Responsabilities: [
                'developed bachelor\'s degree'
            ]
        },
    ];

    return (
        <div className={style.container}>
            <h3>Work Experience</h3>
            {experience.map((exp) => (
                <ExperienceElement 
                key={Math.random()}
                Company={exp.Company}
                Period={exp.Period}
                Position={exp.Position}
                Responsabilities={exp.Responsabilities}/>
            ))}
        </div>
    );
}