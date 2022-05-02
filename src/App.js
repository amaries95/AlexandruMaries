import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row } from 'react-bootstrap';
import './App.css';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';

function App() {
  return (
    <Row className="vh-100 gx-0">
      <Col xs={3} className="col-divider">
        <HeaderMenu />
      </Col>
      <Col>
        <p>dsa</p>
      </Col>
    </Row>
  );
}

export default App;
