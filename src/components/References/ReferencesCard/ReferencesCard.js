import ReferenceCard from './ReferenceCard/ReferenceCard';
import style from './ReferencesCard.module.css';

export default function ReferencesCard(props)
{
    return (
        <div className={style.container}>
            <ReferenceCard backgroundColor='rgb(125,185,200)' position='left'/>
            <ReferenceCard backgroundColor='darkcyan' position='right'/>
        </div>
    );
}