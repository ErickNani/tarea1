import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './menu.scss';
import {changeOption} from '../../Reducers/optionSlice'

function Menu() {
    const changeOptionFunc = (e)=>{

    }
  return (
    <Navbar expand="lg" className='navbar navbar-dark bg-dark'>
        <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link href="#home">Tasks</Nav.Link>
                    <Nav.Link href="#link" onClick={changeOptionFunc}>Goals</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Menu;