import style from './ExperienceSplitter.module.css';

export default function ExperienceSplitter(props){

    function CheckIsItIsLastOne(index, length)
    {
        if(index == length - 1)
        {
            return true;
        }

        return false;
    }

    return (
        <>
            {!CheckIsItIsLastOne(props.Index, props.Length) && <div className={style.splitter}></div>}
            {CheckIsItIsLastOne(props.Index, props.Length) && <div className={style.splitter} style={{height: "540%"}}></div>}
        </>
        
    );
}