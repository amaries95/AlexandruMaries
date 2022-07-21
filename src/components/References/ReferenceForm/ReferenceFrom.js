import { useState } from 'react';
import { Send, SendOutline } from 'react-ionicons';
import style from './ReferenceForm.module.css';

export default function ReferenceForm(){

    const [hover, setHover] = useState(false);
    const [authorInput, setAuthorInput] = useState('');
    const [authorJobTitleInput, setAuthorJobTitleInput] = useState('');
    const [summaryInput, setSummaryInput] = useState('');

    function onSendButtonHover(){
        setHover(true);
    }

    function onSendButtonNotHover(){
        setHover(false);
    }

    function onSendReference(event) {
        const reference = {
            summary: summaryInput,
            author: authorInput,
            jobTitleAuthor: authorJobTitleInput
        };
        postReference(reference);        
    }

    async function postReference(reference){
        var bodyRef = JSON.stringify(reference);

        var response = fetch("https://alexandrumariesapi20220720164524.azurewebsites.net/reference",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: bodyRef
        });

        const data = await (await response).json();
        console.log(data);
    }

    function authorContentChanged(event){
        setAuthorInput(event.target.value);
    }

    function jobTitleAuthorContentChanged(event){
        setAuthorJobTitleInput(event.target.value);
    }

    function summaryContentChanged(event)
    {
        setSummaryInput(event.target.value);
    }

    return(
        <div className={style.container}>
            <input className={style['author']} placeholder="Author" onChange={authorContentChanged}></input>
            <input className={style['job-title-author']} placeholder="Author job title" onChange={jobTitleAuthorContentChanged}></input>
            <input className={style['summary']} placeholder="Summary" onChange={summaryContentChanged}></input>
            <button className={style.icon} onMouseOver={onSendButtonHover} onMouseOut={onSendButtonNotHover} onClick={onSendReference}>
                {hover && <Send color={'darkcyan'}></Send>}
                {!hover && <SendOutline color={'darkcyan'}></SendOutline>}
            </button>
        </div>
    );
}