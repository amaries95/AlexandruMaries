import 'bootstrap/dist/css/bootstrap.css';
import { Card, Row } from 'react-bootstrap';
import { LogoFacebook, LogoGithub, LogoLinkedin } from "react-ionicons";
import style from './Footer.module.css';

export default function Footer(props) {
  return (
    <Card className={style['bottom-info']}>
          <Row className={style.content}>
            <ul className={style.list}>
              <li>
                <a href='https://www.linkedin.com/in/alexandrumaries' target='_blank' rel="noreferrer">
                  <LogoLinkedin 
                    color={"white"}
                    width={'25%'}
                    height={'25%'}>
                  </LogoLinkedin>
                </a>
              </li>
              <li>
                <a href='https://github.com/amaries95' target='_blank' rel="noreferrer">
                  <LogoGithub
                    color={"white"}
                    width={'25%'}
                    height={'25%'}>
                  </LogoGithub>
                </a>
              </li>
              <li>
                <a href='https://www.facebook.com/alexandru.maries28' target='_blank' rel="noreferrer">
                  <LogoFacebook
                    color={"white"}
                    width={'25%'}
                    height={'25%'}>
                  </LogoFacebook>
                </a>
              </li>
            </ul>
          </Row>
    </Card>
  );
}
