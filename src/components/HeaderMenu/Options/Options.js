import { ListGroup } from 'react-bootstrap';
import Option from './Option/Option';
import style from './Options.module.css';

export default function Options(props)
{
    const HeaderOptions = ["HOME", "EXPERIENCE", "PROJECTS", "SKILLS", "RECOMMENDATION"];

    return(
        <ListGroup className={style.options}>
            {HeaderOptions.map(option => 
                {
                    return <Option
                    key={Math.random()}
                    text={option}></Option>;
                })}
        </ListGroup>
    );
}