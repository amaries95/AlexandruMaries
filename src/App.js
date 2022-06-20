import 'bootstrap/dist/css/bootstrap.css';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Recommendation from './components/Recommendation/Recommendation';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <Router>
      <Container fluid={true} className="container-padding">
        <Row className="vh-100 gx-0">
          <Col xs={3} className="col-divider">
            <HeaderMenu />
          </Col>
          <Col>
            <Routes>
              <Route path="/AlexandruMaries/" element={<Home />}></Route>
              <Route
                path="/AlexandruMaries/experience"
                element={<Experience />}
              ></Route>
              <Route
                path="/AlexandruMaries/education"
                element={<Education></Education>}
              ></Route>
              <Route
                path="/AlexandruMaries/projects"
                element={<Projects></Projects>}
              ></Route>
              <Route
                path="/AlexandruMaries/skills"
                element={<Skills></Skills>}
              ></Route>
              <Route
                path="/AlexandruMaries/recommendation"
                element={<Recommendation></Recommendation>}
              ></Route>
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
