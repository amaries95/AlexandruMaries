import 'bootstrap/dist/css/bootstrap.css';
import { Card } from 'react-bootstrap';

export default function Footer(props) {
  return (
    // <div className={style['bottom-info']}>
    //   <footer style={{ backgroundColor: 'darkcyan', width: '100%' }}>
    //     <Col>
    //       <p>dsa </p>
    //     </Col>
    //     <Col>
    //       <p>dsa </p>
    //     </Col>
    //     <Col>
    //       <p>dsa </p>
    //     </Col>
    //   </footer>
    // </div>
    <Card style={{ width: '100%', height: '100%' }}>
      <p>some text</p>
      <p>some text</p>
    </Card>
  );
}
