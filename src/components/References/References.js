import { useCallback, useEffect, useState } from 'react';
import ReferenceForm from './ReferenceForm/ReferenceFrom';
import style from './References.module.css';
import ReferencesCard from './ReferencesCard/ReferencesCard';

export default function References(props)
{
    const [references, setReferences] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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

    return (
        <div className={style.container}>
            <h3>References</h3>
            {!isLoading && <ReferencesCard referencesProp={references}/>}
            {isLoading && <p>Loading...</p>}
            {!isLoading && references.length === 0 && <p>No references yet.</p>}
            <ReferenceForm></ReferenceForm>
        </div>
    );
}