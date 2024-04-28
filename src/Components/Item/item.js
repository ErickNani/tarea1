import React from 'react'
import { useDispatch } from 'react-redux';
import { removeGoal } from '../../Reducers/goalsSlice';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.scss';

function Item(props) {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeGoal({id: props.id}));
    }

  return (
    <Card className={`custom-card ${props.completed ? 'completed' : ''}`}>
     
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text className='DescripcionItem'>
            Descripcion
        </Card.Text>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Card.Text className='DueDateItem'>
            Due Date
        </Card.Text>
        <Card.Text>
            {props.dueDate}
        </Card.Text>
        <Button variant="primary" className='boton' onClick={handleRemove}>Remover</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;