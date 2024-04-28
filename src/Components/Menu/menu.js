
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { changeOption } from '../../Reducers/optionSlice';
import './menu.scss';

function Menu() {
    const dispatch = useDispatch();
    const selectedOption = useSelector((state) => state.option.value);
    
    const handleOptionChange = (option) => {
        dispatch(changeOption(option));
    }
    return (
        <Navbar expand="lg" className='navbar navbar-dark bg-dark'>
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav>
                <Nav.Link
                  href="#tasks"
                  onClick={() => handleOptionChange('tasks')}
                  className={selectedOption === 'tasks' ? 'active' : ''}
                >
                  Tasks
                </Nav.Link>
                <Nav.Link
                  href="#goals"
                  onClick={() => handleOptionChange('goals')}
                  className={selectedOption === 'goals' ? 'active' : ''}
                >
                  Goals
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
    

export default Menu;