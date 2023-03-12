import style from "./SectionTitle.module.css";

export default function SectionTitle(props) {
    return (
        <div className={style['section-title']}>
            <p>{props.title}</p>
        </div>
    );
}