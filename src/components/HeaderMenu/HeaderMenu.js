import Footer from './Footer/Footer';
import style from './HeaderMenu.module.css';
import Options from './Options/Options';
import Person from './Person/Person';
import SocialLinks from './SocialLinks/SocialLinks';

export default function HeaderMenu(props)
{
    return <div className={style.header}>
        <Person />
        <SocialLinks></SocialLinks>
        <Options />
    </div>;
}