import { useEffect } from 'react';
import AboutMe from './AboutMe/AboutMe';
import style from './Home.module.css';
import Wallpaper from './Wallpaper/Wallpaper';

export default function Home(props)
{
    const basicInfo = [
        {Type: "date of birth", Info: "August 2"},
        {Type: "email", Info: "alexandru.maries@icloud.com"},
        {Type: "address", Info: "Cluj-Napoca, Romania"},
        {Type: "languages", Info: "Romanian, English"},
    ];

    useEffect(() => {
        
    })

    return (
        <div className={style.container}>
            <Wallpaper></Wallpaper>
            <AboutMe Infos={basicInfo}></AboutMe>
        </div>
    );
}