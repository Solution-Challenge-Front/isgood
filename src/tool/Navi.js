import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav } from 'react-bootstrap'

function Navi(){
    return(
        <div>
            <Navbar id="nav" bg="ligth" variant="ligth">
                <Container>
                    <Navbar.Brand href="#home">Idea Connection</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="/introduce">Introduce</Nav.Link>
                        <Nav.Link href="#">Menu2</Nav.Link>
                        <Nav.Link href="#">Menu3</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/signupselect">Sing up</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}
export default Navi;