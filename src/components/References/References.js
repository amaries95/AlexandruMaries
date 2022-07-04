import ReferenceForm from './ReferenceForm/ReferenceFrom';
import style from './References.module.css';
import ReferencesCard from './ReferencesCard/ReferencesCard';

export default function References(props)
{
    return (
        <div className={style.container}>
            <h3>References</h3>
            <ReferencesCard></ReferencesCard>
            <ReferenceForm></ReferenceForm>
        </div>
    );
}