import style from './ReferenceCard.module.css';

export default function ReferenceCard(props){
    return (
        <div className={style['reference-card']}>
            <div className={style['reference-container']}>
                <p className={style.reference}>{props.summary}</p>
            </div>
            <div className={style['author-container']}>
                <p>~ {props.author} ({props.jobTitleAuthor})</p>
            </div>
        </div>
    )

}