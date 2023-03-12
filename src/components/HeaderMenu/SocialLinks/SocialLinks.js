import LinkedInIcon from '../../../Icons/LinkedInIcon';
import style from'./SocialLinks.module.css';
import GithubIcon from '../../../Icons/GithubIcon'; 
import PdfIcon from '../../../Icons/PdfIcon';

export default function SocialLinks() {
    return (
        <div className={style.container}>
            <a href='https://www.linkedin.com/in/alexandrumaries' target="_blank"><LinkedInIcon></LinkedInIcon></a>
            <a href='https://github.com/amaries95' target="_blank"><GithubIcon></GithubIcon></a>
            <a href='https://www.icloud.com/iclouddrive/067peGQrqYYPxdPchnT7S6drA#CV' target="_blank"><PdfIcon></PdfIcon></a>
        </div>
    )
}