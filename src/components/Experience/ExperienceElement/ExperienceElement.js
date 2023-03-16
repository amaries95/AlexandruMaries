import { useState } from 'react';
import ExperienceBullet from './ExperienceBullet/ExperienceBullet';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import style from './ExperienceElement.module.css';

export default function ExperienceElement(props)
{
    const monthsOfTheYear = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const startPeriod = props.StartPeriod;
    const endPeriod = props.EndPeriod;
    const currentDate = new Date();

    function CalculatePeriod(startPeriod, endPeriod){
        // start period < endPeriod ALWAYS
        const diffTime = Math.abs(endPeriod - startPeriod);
        const diffIndays = Math.ceil(diffTime/ (1000 * 60 * 60 * 24));
        const diffInMonths = Math.abs(diffIndays/365);
        const years = Math.trunc(diffInMonths);
        const months = Math.round((diffInMonths - years) * 12);

        return {years: years, months: months};
    };

    function FormatPeriod()
    {
        let period = CalculatePeriod(startPeriod, endPeriod);
        let periodDifference = null;
        
        if(period.years === 0)
        {
            periodDifference = `${period.months} months`;
        }
        else if(period.months === 0)
        {
            periodDifference = `${period.years} year`;
        }
        else {
            periodDifference = `${period.years} year ${period.months} months`;
        }

        if(CheckIfCurrent(endPeriod, currentDate))
        {
            return `${monthsOfTheYear[startPeriod.getMonth()]} ${startPeriod.getFullYear()} - Present ( ${periodDifference} )`;
        }

        return `${monthsOfTheYear[startPeriod.getMonth()]} ${startPeriod.getFullYear()} - ${monthsOfTheYear[endPeriod.getMonth()]} ${endPeriod.getFullYear()} ( ${periodDifference} )`;
    }

    function CheckIfCurrent(endPeriod, currentDate)
    {
        return endPeriod.getMonth() == currentDate.getMonth() && endPeriod.getFullYear() == currentDate.getFullYear();
    }

    return (
        <div className={style.container}>
            <ExperienceBullet isCurrentExp={CheckIfCurrent(endPeriod, new Date())} Index={props.Index} Length={props.Length}></ExperienceBullet>
            <ExperienceCard 
                Company={props.Company}
                Period={FormatPeriod()}
                Position={props.Position}
                Responsabilities={props.Responsabilities}/>
        </div>
    );
}