import style from './Skills.module.css';
import SkillsGroup from './SkillsGroup/SkillsGroup';

export default function Skills(props)
{
    return (
        <div className={style.container}>
            <h3>Skills</h3>
            <SkillsGroup></SkillsGroup>
            <SkillsGroup></SkillsGroup>
            <SkillsGroup></SkillsGroup>
        </div>
        
    );
}