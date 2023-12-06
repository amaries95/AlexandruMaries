import { useCallback, useEffect, useState } from 'react';
import { useReducer, useSelector, useDispatch } from 'react-redux';
import AddReference from './AddReference/AddReference';
import ReferenceForm from './ReferenceForm/ReferenceFrom';
import style from './References.module.css';
import ReferencesCard from './ReferencesCard/ReferencesCard';
import {referenceActions} from "./../Store/reference";


export default function References(props)
{
    const referencesStore = useSelector(state => state.reference.referenceList);
    const isFormVisible = useSelector(state => state.reference.isFormVisible);
    const [isLoading, setIsLoading] = useState(false);
    const [numberOfWebsiteVisits, setNumberOfWebsiteVisits] = useState('');
    const isLogin = useSelector(state => state.login.isAuth);
    const token = useSelector(state => state.login.token);
    const baseUrl = useSelector(state => state.routes.baseUrl);
    const getAllReferences = useSelector(state => state.routes.getAllReferences);
    const getVisibleReferences = useSelector(state => state.routes.getVisibleReferences);
    const getViews = useSelector(state => state.routes.getViews);
    const referencesDispatch = useDispatch();
    const ReferencesConstant = [
        {
            id: 48,
            summary: "Alex was a real pleasure to work with. I would describe him as a passionate developer with a continuous learning mindset. He demonstrates his skills beautifully in this portfolio.",
            author: "Casandra Sucala",
            jobTitleAuthor: "Software Engineer"
        },
        {
            id: 88,
            summary: "It was super fun to solve problems with Alex. I hope we will be able to code together again :D",
            author: "Eduard Melu",
            jobTitleAuthor: "Full Stack Engineer"
        },
        {
            id: 89,
            summary: "Alexandru is not afraid to take on challenges and showed professionalism and dedication in every task he did. It was a really great pleasure to work with someone as daring and passionate, who wants to do more than is expected, who knows how to share his knowledge and can work and integrate in any team.",
            author: "Roxana Gheorghe",
            jobTitleAuthor: "Software Engineer"
        },
        {
            id: 90,
            summary: "I've worked with Alex for quite some time, and during this period, he's proven to be one of the best people one could work with: he's very dedicated, with a great eagerness to learn new things and acquire new skills, he's not afraid of a challenge. He is also very helpful when someone's in need, and he's easy to communicate with. Overall, a great person to have as a colleague.",
            author: "Sabina Andrei",
            jobTitleAuthor: "Software Engineer"
        },
        {
            id: 92,
            summary: "Was really nice to have Alexandru in our Team, We hope that we will cross our paths in the future.",
            author: "Quique",
            jobTitleAuthor: "Director"
        },
    ];

    const noReferenceYetCard = [{
        id: "0",
        summary: "No references yet. Be the first one who adds a reference for Alex. 🙂",
        author: "Server Response",
        jobTitleAuthor: "Azure Database"
    }];
    
    const loadingReferenceCard = [{
        id: "1",
        summary: "Reading all references from the server...",
        author: "Frontend App",
        jobTitleAuthor: "React"
    }];

    const getReferences = useCallback(async () => {
        setIsLoading(true);
        
        let response = null
        // if(isLogin)
        // {
        //     response = await fetch(baseUrl + getAllReferences,{
        //         method: "GET",
        //         headers: { 
        //             "Content-Type": "application/json",
        //             "Authorization": `Bearer ${token}`
        //         }
        //     });
        // }
        // else {
        //     response = await fetch(baseUrl + getVisibleReferences);
        // }

        // const data = await response.json();

        referencesDispatch(referenceActions.saveReferences([...ReferencesConstant]));
        setIsLoading(false);
    }, []);

    const getNumberOfWebsiteVisits = useCallback(async () => {
        if(isLogin)
        {
            const response = await fetch(baseUrl + getViews, {
                method: "GET",
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            const data = await response.json();

            setNumberOfWebsiteVisits(data.numberOfViews);
        }
    });

    useEffect(() => {
        getReferences();
        getNumberOfWebsiteVisits();
     }, 
    [getReferences]);

    return (
        <div className={style.container}>
            <h3>References</h3>
            {isLogin && <label>Admin Mode: {numberOfWebsiteVisits} views</label>}
            {isLoading && <ReferencesCard referencesProp={loadingReferenceCard}></ReferencesCard>}
            {!isLoading && referencesStore.length === 0 && <ReferencesCard referencesProp={noReferenceYetCard}></ReferencesCard>}
            {!isLoading && <ReferencesCard referencesProp={referencesStore}/>}
            {/* {isFormVisible && <ReferenceForm></ReferenceForm>}
            {!isFormVisible && <AddReference></AddReference>} */}
        </div>
    );
}