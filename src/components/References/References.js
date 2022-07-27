import { useCallback, useEffect, useState } from 'react';
import AddReference from './AddReference/AddReference';
import ReferenceForm from './ReferenceForm/ReferenceFrom';
import style from './References.module.css';
import ReferencesCard from './ReferencesCard/ReferencesCard';

export default function References(props)
{
    const [references, setReferences] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isReferenceFormHidden, setIsReferenceFormHidden] = useState(true);

    const getReferences = useCallback(async () => {
        setIsLoading(true);
        
        const response = await fetch("https://alexandrumariesapi20220720164524.azurewebsites.net/reference");
        const data = await response.json();
        
        setReferences(data);
        setIsLoading(false);
    }, []);

    useEffect(() => {
        getReferences();
     }, 
    [getReferences]);

    function toggleReferenceForm(isHidden)
    {
        setIsReferenceFormHidden(isHidden);
    }

    function onTransferCalled(reference)
    {
        setReferences([...references, reference]);
    }

    return (
        <div className={style.container}>
            <h3>References</h3>
            {!isLoading && <ReferencesCard referencesProp={references}/>}
            {isLoading && <p>Loading...</p>}
            {!isLoading && references.length === 0 && <p>No references yet.</p>}
            {!isReferenceFormHidden && <ReferenceForm ToggleAddReference={toggleReferenceForm} TransferNewReferenceToParent={onTransferCalled}></ReferenceForm>}
            {isReferenceFormHidden && <AddReference ToggleAddReference={toggleReferenceForm}></AddReference>}
        </div>
    );
}