import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Components/Item/item'
import Menu from './Components/Menu/menu'
import Formulario from './Components/Formulario/formulario'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { initAddTask } from './Reducers/tasksSlice'
import { initAddGoal } from './Reducers/goalsSlice';
import { changeOption } from './Reducers/optionSlice'

function App() {
  const selectedOption = useSelector((state) => state.option.value)
  const goals = useSelector((state) => state.goals.value);
  const tasks = useSelector((state) => state.tasks.value);
  const dispatch = useDispatch();

  const handleOptionChange = (option) => {
    dispatch(changeOption(option));
  };

  function initFetch() {
    {selectedOption == 'goals' ? (
      fetch("http://localhost:3001/goals/getGoals", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "123456"
        }
      }).then((response) => {
        return response.json()
      }).then((response) => {
        response.map((goal) => {
          dispatch(initAddGoal(goal));
        })
      }).catch(err => {
        console.log(err);
      })
    ) : (
      fetch("http://localhost:3001/tasks/getTasks", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "123456"
        }
      }).then((response) => {
        return response.json()
      }).then((response) => {
        response.map((task) => {
          dispatch(initAddTask(task));
        })
      }).catch(err => {
        console.log(err);
      })
    )}

  }
  useEffect(() => {
    initFetch();
  }, [])

  return (
    <div className="App">
      <Menu handleOptionChange={handleOptionChange} />
      {selectedOption === 'goals' ? (
        <>
          <h1>TAREAS PENDIENTES</h1>
          <Container>
            <Row>
              <Col>
                <h2>Ingresa una Tarea</h2>
                <Formulario selectedOption={selectedOption}></Formulario>
              </Col>
              <Col>
                <h2>Pending</h2>
                {goals.map((goal, index) => (
                  <Item key={index} name={goal.name} description={goal.description} dueDate={goal.dueDate} id={goal.id}> </Item>
                ))}
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <>
        <h1>TAREAS PENDIENTES</h1>
        <Container>
          <Row>
            <Col>
              <h2>Ingresa una Tarea</h2>
              <Formulario selectedOption={selectedOption}></Formulario>
            </Col>
            <Col>
              <h2>Pending</h2>
              {tasks.map((task, index) => (
                <Item key={index} name={task.name} description={task.description} dueDate={task.dueDate} id={task.id}> </Item>
              ))}
            </Col>
          </Row>
        </Container>
      </>
      )}
    </div>
  );
}

export default App;
