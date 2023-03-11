import style from './Person.module.css';

export default function Person(props) {
  return (
    <div className={style.person}>
      {/* <LazyLoadImage src={img} alt="Alexandru Maries"></LazyLoadImage> */}
      <h1>Alex Maries</h1>
      <p>Full-Stack Developer</p>
    </div>
  );
}
