import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.scss';

function item(props) {
  return (
    <Card className="custom-card">
     
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
        <Button variant="primary" className='boton'>Remover</Button>
      </Card.Body>
    </Card>
  );
}

export default item;