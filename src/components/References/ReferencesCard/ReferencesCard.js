import ReferenceCard from './ReferenceCard/ReferenceCard';
import style from './ReferencesCard.module.css';

export default function ReferencesCard(props)
{
    return (
        <div className={style['references-card']}>
            {props.referencesProp.map((reference) => (
                <ReferenceCard 
                key={reference.id}
                summary={reference.summary}
                author={reference.author}
                jobTitleAuthor={reference.jobTitleAuthor}/>
            ))}
        </div>
    );
}