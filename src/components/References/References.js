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

    const noReferenceYetCard = [{
        summary: "No references yet. Be the first one who adds a reference for Alex. 🙂",
        author: "Server Response",
        jobTitleAuthor: "Azure Database"
    }];
    const loadingReferenceCard = [{
        summary: "Reading all references from the server...",
        author: "Frontend App",
        jobTitleAuthor: "React"
    }];

    const getReferences = useCallback(async () => {
        setIsLoading(true);
        
        const response = await fetch("https://alexandrumariesapi.azurewebsites.net/reference");
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
            {isLoading && <ReferencesCard referencesProp={loadingReferenceCard}></ReferencesCard>}
            {!isLoading && references.length === 0 && <ReferencesCard referencesProp={noReferenceYetCard}></ReferencesCard>}
            {!isLoading && <ReferencesCard referencesProp={references}/>}
            {!isReferenceFormHidden && <ReferenceForm ToggleAddReference={toggleReferenceForm} TransferNewReferenceToParent={onTransferCalled}></ReferenceForm>}
            {isReferenceFormHidden && <AddReference ToggleAddReference={toggleReferenceForm}></AddReference>}
        </div>
    );
}