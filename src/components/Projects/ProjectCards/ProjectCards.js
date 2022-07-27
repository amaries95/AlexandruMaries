import ProjectCard from './ProjectCard/ProjectCard';
import style from './ProjectCards.module.css';

export default function ProjectCards(props)
{
    return (
        <div className={style.container}>
            <ProjectCard description="&emsp;The summary of the projectdsads dsads ds adsad ds ads  dsadsdsa dsa dsadsdsadsa dsa dsdsadsads dsadsdsa
            dsadsn dsnndsn ndnsndnnsnds n ndnsndn sndn sndn ns ndnns dnsnnd sn ndnsnd nsndnsdnd sndnsndn sdndnsam mndsmandmns ndnsnmnadmsn"/>
            <ProjectCard description="dsa"/>
            <ProjectCard description="dsadsa dsjhajd djnsajndj nj jn jdjsajn jnjd nsajn jdnsajndj j jdnsaj jdnj nja jdnajndjsnajn djaprfthal kl"/>
            <ProjectCard/>
            <ProjectCard/>
        </div>
    );
}