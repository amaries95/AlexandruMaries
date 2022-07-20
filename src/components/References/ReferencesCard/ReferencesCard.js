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
            
            {/* <ReferenceCard backgroundColor='rgb(212, 212, 109)' position='right'/>
            <ReferenceCard backgroundColor='rgb(143, 209, 143)' position='left'/>
            <ReferenceCard backgroundColor='rgb(125,185,200)' position='right'/>
            <ReferenceCard backgroundColor='rgb(212, 212, 109)' position='left'/>
            <ReferenceCard backgroundColor='rgb(143, 209, 143)' position='right'/> */}
        </div>
    );
}