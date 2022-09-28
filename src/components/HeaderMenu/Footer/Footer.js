import 'bootstrap/dist/css/bootstrap.css';
import { DocumentText, LogoGithub, LogoLinkedin } from 'react-ionicons';
import style from './Footer.module.css';

export default function Footer(props) {
  return (
    <div className={style['bottom-info']}>
      <div className={style.icon}>
        <a href="https://www.linkedin.com/in/alexandrumaries"
          target="_blank"
          rel="noreferrer">
              <LogoLinkedin
                color={'white'}
                width={'40px'}
                height={'40px'}
                title="Linkedin">
                </LogoLinkedin>
        </a>
      </div>
      <div className={style.icon}>
      <a
              href="https://github.com/amaries95"
              target="_blank"
              rel="noreferrer">
              <LogoGithub
                color={'white'}
                width={'40px'}
                height={'40px'}
                title='Github'
              ></LogoGithub>
            </a>
      </div>
      <div className={style.icon}>
        <a href="https://www.icloud.com/iclouddrive/067peGQrqYYPxdPchnT7S6drA#CV"
          target="_blank"
          rel="noreferrer">
              <DocumentText
                color={'white'}
                width={'40px'}
                height={'40px'}
                title='Download CV'>
                </DocumentText>
        </a>
      </div>
    </div>
  );
}
