import { useEffect, useCallback, useState } from "react";
import style from "./ProjectCard.module.css";

export default function ProjectCard(props){
    const handleClick = (evt) => {
        props.onClick();
    };

    return (
        <div className={`${style.container} ${props.isExpanded == true ? style.expanded : style.collapsed}`} onClick={handleClick}> 
        </div>
    );
}