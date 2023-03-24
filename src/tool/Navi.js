import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { getCookie, removeCookie } from '../util/Cookie.js';


function Navi() {
    const navigate  = useNavigate()
    const isLogin = getCookie('token');

    if (isLogin) {
        return (
            <div>
                <Navbar id="nav" bg="ligth" variant="ligth">
                    <Container>
                        <Navbar.Brand href="/">Idea Connection</Navbar.Brand>
                        <Nav>
                            <Nav.Link href="/introduce">Introduce</Nav.Link>
                            <Nav.Link href="#">Menu2</Nav.Link>
                            <Nav.Link href="#">Menu3</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link onClick={(() => {
                                removeCookie('token')
                                alert("로그아웃 되었습니다.")
                                navigate('/')
                            })}>Logout</Nav.Link>
                            <Nav.Link href="/signupselect">Sing up</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
    return (
        <div>
            <Navbar id="nav" bg="ligth" variant="ligth">
                <Container>
                    <Navbar.Brand href="/">Idea Connection</Navbar.Brand>
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