import style from './AddReference.module.css';
import {MdAddCircle as AddCircle} from 'react-icons/md';

export default function AddReference(props)
{
    function onAddReferenceButtonClicked(event)
    {
        props.ToggleAddReference(false);
    }

    return(
        <div className={style.container}>
            <button className={style.icon} onClick={onAddReferenceButtonClicked}>
                <AddCircle color={'darkcyan'} size={'60px'}></AddCircle> 
            </button>
        </div>
    );    
}