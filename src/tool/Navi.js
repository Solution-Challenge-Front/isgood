import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav } from 'react-bootstrap'

function Navi(){
    return(
        <div>
            <Navbar id="nav" bg="ligth" variant="ligth">
                <Container>
                    <Navbar.Brand href="#home">Idea Connection</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#home">Menu1</Nav.Link>
                        <Nav.Link href="#features">Menu2</Nav.Link>
                        <Nav.Link href="#pricing">Menu3</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}
export default Navi;