import AboutMe from './AboutMe/AboutMe';
import style from './Home.module.css';

export default function Home(props)
{
    return (
        <div className={style.container}>
            <AboutMe></AboutMe>
        </div>
    );
}