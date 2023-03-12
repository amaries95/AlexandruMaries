import 'bootstrap/dist/css/bootstrap.css';
import BoltIcon from '../../../Icons/BoltIcon';
import style from './HireMe.module.css';

export default function HireMe(props) {
  return (
    <div className={style.container}>
      <div className={style['hire-me']}>
        <BoltIcon></BoltIcon>
        <p>Hire Me</p>
      </div>
    </div>
  );
}
