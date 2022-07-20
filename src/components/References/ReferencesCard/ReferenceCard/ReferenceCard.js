import style from './ReferenceCard.module.css';

export default function ReferenceCard(props){
    // const styles = {
    //     card: {
    //         backgroundColor: props.backgroundColor,
    //         // float: props.position
    //     },
    // }

    console.log(props.author);


    return (
        <div className={style['reference-card']}>
            <p className={style.reference}>{props.summary}</p>
            <div className={style.author}>
                <p>~ {props.author} ({props.jobTitleAuthor})</p>
            </div>
        </div>
    )

}