import AboutMe from './AboutMe/AboutMe';
import style from './Home.module.css';
import Wallpaper from './Wallpaper/Wallpaper';

export default function Home(props)
{
    return (
        <div className={style.container}>
            <Wallpaper></Wallpaper>
            <AboutMe></AboutMe>
        </div>
    );
}