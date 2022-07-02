import ProjectCard from './ProjectCard/ProjectCard';
import style from './ProjectCards.module.css';

export default function ProjectCards(props)
{
    return (
        <div className={style.container}>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </div>
    );
}