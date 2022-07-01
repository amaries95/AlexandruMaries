import style from './SkillsGroup.module.css';
import SkillsGroupDetails from './SkillsGroupDetails/SkillsGroupDetails';

export default function SkillsGroup(props)
{
    return (
        <div className={style.container}>
            <h3>Technical</h3>
            <SkillsGroupDetails></SkillsGroupDetails>
        </div>
        
    );
}