import { LazyLoadImage } from 'react-lazy-load-image-component';
import style from './Person.module.css';
import img from './photo.JPG';

export default function Person(props) {
  return (
    <div className={style.person}>
      <LazyLoadImage src={img} alt="Alexandru Maries"></LazyLoadImage>
      <h1>Alexandru Maries</h1>
      <p>Software Developer</p>
    </div>
  );
}
