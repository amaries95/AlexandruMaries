import style from './ProgressBar.module.css';

export default function ProgressBar(props)
{
    return (
        <div className={style['progress-bar']}>
            <div className={style['fill-progress-bar']}>
                <span><br/></span>
            </div>
        </div>
    );
}