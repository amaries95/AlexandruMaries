import style from './Person.module.css';
import img from './photo.JPG';

export default function Person(props) {
  return (
    <div className={style.person}>
      <img src={img} alt="Alexandru Maries"></img>
      <h1>Alexandru Maries</h1>
      <p>Software Developer</p>
    </div>
  );
}
