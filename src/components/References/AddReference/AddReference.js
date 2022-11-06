import style from './AddReference.module.css';

export default function AddReference(props)
{
    function onAddReferenceButtonClicked(event)
    {
        props.ToggleAddReference(false);
    }

    return(
        <div className={style.container}>
            <button className={style.icon} onClick={onAddReferenceButtonClicked}>
                {/* <AddCircle color={'darkcyan'}></AddCircle> */}
            </button>
        </div>
    );    
}