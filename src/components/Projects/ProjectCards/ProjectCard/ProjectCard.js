import style from './ProjectCard.module.css';

export default function ProjectCard(props)
{
    return (
        <div className={style.container}>
            <p className={style['project-title']}>Title</p>
            <p className={style['project-description']}>{props.description}</p>
            <div className={style['project-technologies']}>
                <p>Technologies</p>
                <ul>
                    <li>.Net</li>
                    <li>.React</li>
                    <li>xUnit</li>
                    <li>Autofac</li>
                    <li>Autofac</li>
                    <li>Autofac</li>
                </ul>
            </div>
            
            
        </div>
    );
}