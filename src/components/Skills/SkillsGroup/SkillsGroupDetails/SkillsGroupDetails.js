import Skill from './Skill/Skill';
import style from './SkillsGroupDetails.module.css';

export default function SkillsGroupDetails(props)
{
    return (
        <div className={style.container}>
            <Skill></Skill>
            <Skill></Skill>
            <Skill></Skill>
            <Skill></Skill>
            <Skill></Skill>
        </div>
        
    );
}