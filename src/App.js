import "bootstrap/dist/css/bootstrap.css";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Experience from "./components/Experience/Experience";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import Home from "./components/Home/Home";
import MobileHeaderMenu from "./components/MobileHeaderMenu/MobileHeaderMenu";
import Projects from "./components/Projects/Projects";
import References from "./components/References/References";
import Skills from "./components/Skills/Skills";
import Login from "./components/Login/Login";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
      <Router>
        <Container fluid={true} className="container-padding">
          <Row className="vh-100 vw-100 gx-0">
            <MobileHeaderMenu></MobileHeaderMenu>
            <Col xs={3} className="col-divider">
              <HeaderMenu />
            </Col>
            <Col className="content-container">
              <Routes>
                <Route path="" element={<Home />}></Route>
                <Route path="/experience" element={<Experience />}></Route>
                <Route path="/projects" element={<Projects></Projects>}></Route>
                <Route path="/skills" element={<Skills></Skills>}></Route>
                <Route path="/references" element={<References />}></Route>
                <Route path="/login" element={<Login />}></Route>
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
  );
}

export default App;
