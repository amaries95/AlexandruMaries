import LinkedInIcon from '../../../Icons/LinkedInIcon';
import style from'./SocialLinks.module.css';
import GithubIcon from '../../../Icons/GithubIcon'; 
import PdfIcon from '../../../Icons/PdfIcon';

export default function SocialLinks() {
    return (
        <div className={style.container}>
            <a href=''>
                <LinkedInIcon></LinkedInIcon>
            </a>
            <GithubIcon></GithubIcon>
            <PdfIcon></PdfIcon>
        </div>
    )
}