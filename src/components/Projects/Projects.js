import style from './Project.module.css';
import ProjectCards from './ProjectCards/ProjectCards';

export default function Projects(props)
{
    return (
        <div className={style.container}>
            <h3>Projects</h3>
            <ProjectCards/>
        </div>
    );
}