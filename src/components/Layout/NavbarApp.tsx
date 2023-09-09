import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavbarApp() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to={'/'}>React Design Patterns</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/container-presentation">Container Presentation</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/render-props">Render Props | prefetch</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/hoc">Hook</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/provider">Provider</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/compound">Compound</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
