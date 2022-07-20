import style from './ReferenceForm.module.css';

export default function ReferenceForm(){
    return(
        <div className={style.container}>
            <input className={style['author']} placeholder="Author"></input>
            <input className={style['job-title-author']} placeholder="Author job title"></input>
            <input className={style['summary']} placeholder="Summary"></input>
            <button>Send</button>
        </div>
    );
}