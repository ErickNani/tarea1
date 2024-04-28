import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Components/Item/item'
import Menu from './Components/Menu/menu'
import Formulario from './Components/Formulario/formulario'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';

function App() {
  const goals = useSelector((state) => state.goals.value);
  const completedGoals = useSelector((state) => state.goals.completed);
  const selectedOption = useSelector((state) => state.option.value);

  const filteredGoals = goals.filter(goal => {
    return selectedOption === 'tasks' ? !goal.completed : goal.completed;
  });

  return (
    <div className="App">
      <Menu></Menu>
      <h1>TAREAS PENDIENTES</h1>
      <Container>
        <Row>
          <Col>
          <h2>Ingresa una Tarea</h2>
          <Formulario></Formulario>
          </Col>
          <Col>
            <h2>Pending</h2>
            {goals.map((tarea) => (
              <Item key={tarea.id} id={tarea.id} name={tarea.name} description={tarea.description} dueDate={tarea.dueDate}> </Item>
            ))}
          </Col>
          <Col>
            <h2>Completed</h2>
            {completedGoals.map((completedTask) => (
              <Item key={completedTask.id} id={completedTask.id} name={completedTask.name} description={completedTask.description} dueDate={completedTask.dueDate} style={{ background: 'hsl(0, 86%, 67%)' }}/>
            ))}
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
