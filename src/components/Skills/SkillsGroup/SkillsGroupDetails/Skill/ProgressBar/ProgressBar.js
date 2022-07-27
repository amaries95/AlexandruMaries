import style from './ProgressBar.module.css';

export default function ProgressBar(props)
{
    const dynamicStyles = { 
        fill: { 
            width: `${props.PercentageLevel}%`
        }, 
    } 

    return (
        <div className={style['progress-bar']}>
            <div className={style['fill-progress-bar']} style={dynamicStyles.fill}>
                <span><br/></span>
            </div>
        </div>
    );
}