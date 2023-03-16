import style from './ExperienceBullet.module.css';
import ExperienceSplitter from './ExperienceSplitter/ExperienceSplitter';

export default function ExperienceBullet(props)
{
    return (
        <>
            <div className={style['container-bullet']}>
                <div className={props.isCurrentExp ? style['half-bullet'] : style['bullet']}>
                </div>
                <ExperienceSplitter Index={props.Index} Length={props.Length}></ExperienceSplitter>
            </div>
            
        </>
        
    );
}