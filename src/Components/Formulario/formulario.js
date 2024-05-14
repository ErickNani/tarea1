import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import './formulario.scss';
import { useDispatch } from 'react-redux';
import { addGoal } from '../../Reducers/goalsSlice';
import { addTask } from '../../Reducers/tasksSlice';
import { useRef } from 'react';

function Formulario({ selectedOption}) {

    const inputRefName = useRef();
    const inputRefDescription = useRef();
    const inputRefDueDate = useRef();
    const dispatch = useDispatch();

    const addItem = (e) => {
        e.preventDefault();
        const newItem = {
            'name': inputRefName.current.value,
            'description': inputRefDescription.current.value,
            'dueDate': inputRefDueDate.current.value,
        };
        if (selectedOption === 'goals') {
            dispatch(addGoal(newItem));
        } else {
            dispatch(addTask(newItem));
        }
    };

    const buttonText = selectedOption === 'goals' ? 'Agregar Meta' : 'Agregar Tarea';

    return (
        <Container>
            <Form>

                <Form.Group className="Formulario">
                    <Form.Label className='Nombre'>Nombre</Form.Label>
                    <Form.Control type="text" placeholder='' ref={inputRefName} />
                    <Form.Text className="text-style">
                        Ingrese nombre de curso
                    </Form.Text>

                    <Form.Label className='Descripcion'>Descripcion</Form.Label>
                    <Form.Control type="textarea" rows={3} ref={inputRefDescription} />
                    <Form.Text className="text-style">
                        Ingrese descripcion de tarea
                    </Form.Text>

                    <Form.Label className='FechaEntrega'>Fecha de Entrega</Form.Label>
                    <Form.Control type="date" placeholder='' ref={inputRefDueDate} />
                    <Form.Text className="text-style">
                        Ingrese fecha de entrega
                    </Form.Text>
                    <div></div>
                    <Button variant="info" onClick={addItem} className="boton">
                        {buttonText}
                    </Button>
                </Form.Group>
            </Form>


        </Container>
    );
}

export default Formulario;