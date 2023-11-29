import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css"

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            width="30"
            height="30"
            className="w-6 h-6 logoIcon"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
          </svg>
          <span className='edujarname'>Edujar</span>
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto justify-content-center">
            <Nav.Link href="#features" className="mx-3 nav-items">Home</Nav.Link>
            <Nav.Link href="#pricing" className="mx-3 nav-items">About</Nav.Link>
            <Nav.Link href="#pricing" className="mx-3 nav-items">Course</Nav.Link>
            <Nav.Link href="#pricing" className="mx-3 nav-items">Blog</Nav.Link>
            <Nav.Link href="#pricing" className="mx-3 nav-items">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className='navbar-button' href="#deets">Login</Nav.Link>
            <Nav.Link className='navbar-button getting-start-btn' eventKey={2} href="#memes">
              Get Started
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
