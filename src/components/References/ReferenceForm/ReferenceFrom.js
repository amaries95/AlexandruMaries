import { useState } from 'react';
import { CloseCircle, CloseCircleOutline, Send, SendOutline } from 'react-ionicons';
import style from './ReferenceForm.module.css';

export default function ReferenceForm(props){

    const [hoverSendButton, setHoverSendButton] = useState(false);
    const [hoverHideButton, setHoverHideButton] = useState(false);
    
    const [authorInput, setAuthorInput] = useState('');
    const [authorJobTitleInput, setAuthorJobTitleInput] = useState('');
    const [summaryInput, setSummaryInput] = useState('');

    const [isAuthorValid, setIsAuthorValid] = useState(true);
    const [isAuthorJobTitleValid, setIsAuthorJobTitleValid] = useState(true);
    const [isSummaryInputValid, setIsSummaryInputValid] = useState(true);

    function onSendButtonHover(){
        setHoverSendButton(true);
    }

    function onSendButtonNotHover(){
        setHoverSendButton(false);
    }

    function onHideButtonHover(){
        setHoverHideButton(true);
    }

    function onHideButtonNotHover(){
        setHoverHideButton(false);
    }

    async function onSendReference(event) {
        const reference = {
            summary: summaryInput,
            author: authorInput,
            jobTitleAuthor: authorJobTitleInput
        };
        
        if(await postReference(reference))
        {
            props.TransferNewReferenceToParent(reference);
        }
    }

    function onHideButtonClicked(){
        props.ToggleAddReference(true);
    }

    function isValid(text)
    {
        if(!text.replace(/\s/g, '').length)
        {
            return false;
        }

        return true;
    }

    async function postReference(reference){

        if(isValid(authorInput) && isValid(authorJobTitleInput)  && isValid(summaryInput))
        {
            setAuthorInput('');
            setAuthorJobTitleInput('');
            setSummaryInput('');

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

            return true;
        }

        if(!isValid(authorInput))
        {
            setIsAuthorValid(false);
        }
        
        if(!isValid(authorJobTitleInput))
        {
            setIsAuthorJobTitleValid(false);
        }

        if(!isValid(summaryInput))
        {
            setIsSummaryInputValid(false);
        }

        return false;
    }

    function authorContentChanged(event){
        var content = event.target.value;
        setAuthorInput(content);
        
        if(isValid(content))
        {
            setIsAuthorValid(true);
        }
    }

    function jobTitleAuthorContentChanged(event){
        var content = event.target.value;
        setAuthorJobTitleInput(content);

        if(isValid(content))
        {
            setIsAuthorJobTitleValid(true);
        }
    }

    function summaryContentChanged(event)
    {
        var content = event.target.value;
        setSummaryInput(content);
        
        if(isValid(content))
        {
            setIsSummaryInputValid(true);
        }
    }

    return(
        <div className={style.container}>
            <div className={style.form}>
                <input className={isAuthorValid ? style['author'] : style['author-invalid']} placeholder="Author" onChange={authorContentChanged} value={authorInput}></input>
                <input className={isAuthorJobTitleValid ? style['job-title-author'] : style['job-title-author-invalid']} placeholder="Author job title" onChange={jobTitleAuthorContentChanged} value={authorJobTitleInput}></input>
                <textarea className={isSummaryInputValid ? style['summary'] : style['summary-invalid']} placeholder="Summary" onChange={summaryContentChanged} wrap="soft" value={summaryInput}></textarea>
        </div>
            <div className={style.controls}>
                <div className={style['hide-form-container']}>
                    <button className={`${style['hide-form']} ${style['icon']}`} onMouseOver={onHideButtonHover} onMouseOut={onHideButtonNotHover} onClick={onHideButtonClicked}>
                        {hoverHideButton && <CloseCircle color={'darkcyan'}></CloseCircle>}
                        {!hoverHideButton && <CloseCircleOutline color={'darkcyan'}></CloseCircleOutline>}
                    </button>
                </div>
                <div className={style['send-reference-container']}>
                    <button className={`${style['send-reference']} ${style['icon']}`} onMouseOver={onSendButtonHover} onMouseOut={onSendButtonNotHover} onClick={onSendReference}>
                            {hoverSendButton && <Send color={'darkcyan'}></Send>}
                            {!hoverSendButton && <SendOutline color={'darkcyan'}></SendOutline>}
                    </button>
                </div>
            </div>
        </div>
    );
}