import style from './AddReference.module.css';
import { useState } from 'react';
import {MdAddCircle as AddCircle} from 'react-icons/md';
import {MdAddCircleOutline as AddCircleEmpty} from 'react-icons/md';
import { referenceActions } from '../../Store/reference';
import { useDispatch, useSelector } from 'react-redux';

export default function AddReference(props)
{
    const [onMouseHovered, setOnMouseHovered] = useState(false);
    const isLoggedIn = useSelector(state => state.login.isAuth);
    const referenceDispatcher = useDispatch();

    function onAddReferenceButtonClicked(event)
    {
        referenceDispatcher(referenceActions.setReferenceFormToVissible());
    }

    function onHoverHandler(event){
        setOnMouseHovered(true);
    }

    function onMouseLeave(event){
        setOnMouseHovered(false);
    }

    return(
        <div className={style.container}>
            <button className={style.icon} onClick={onAddReferenceButtonClicked} onMouseEnter={onHoverHandler} onMouseLeave={onMouseLeave}>
                {!isLoggedIn && <div>
                    {onMouseHovered && <AddCircle className={style['add-circle']} color={'darkcyan'}></AddCircle>}
                    {!onMouseHovered && <AddCircleEmpty className={style['add-circle']} color={'darkcyan'}></AddCircleEmpty>}
                </div>}
            </button>
        </div>
    );    
}