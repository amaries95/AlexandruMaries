import style from './ReferenceCard.module.css';

export default function ReferenceCard(props){
const styles = {
    card: {
        backgroundColor: props.backgroundColor,
        float: props.position,
    },
}

    return (
        <div style={styles.card} className={style['reference-card']}>
            <p className={style.reference}>dsadsa dsadsdsad sa dsadsadsadsa
            dsadsadsad sadsad sa s adsad sadsadsa dsasd dsad dsad sadsa dsadsa 
            dsads adsdsds ad s dsadsdsd asdas ddsa sa sa dsadas</p>
            <div className={style.author}>
                <p>~ Author Name (Embedded Software Developer)</p>
            </div>
        </div>
    )

}