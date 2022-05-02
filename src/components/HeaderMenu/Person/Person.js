import style from './Person.module.css';
import img from './photo.JPG';

export default function Person(props) {
  return (
    <div className={style.person}>
      <img src={img}></img>
      <h3>Full Stack Developer</h3>
    </div>
  );
}
