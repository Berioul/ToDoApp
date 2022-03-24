import {Todo} from "./model";
import './TodoItem.css'
import {Link} from "react-router-dom";

interface TodoItemProps {
    todo: Todo
    onTodoDeletion: () => void;
    onTodoChange: (todos: Array<Todo>) => void;
}

export default function TodoItem(props: TodoItemProps) {

    const deleteTodo = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/todo/${props.todo.id}`, {
            method: 'DELETE',
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(() => props.onTodoDeletion());
    };

    const toggle = () => {


        fetch(`${process.env.REACT_APP_BASE_URL}/todo/${props.todo.id}`, {
            method: 'PUT',
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('token')}`
            }

        })
            .then(() => props.onTodoDeletion());
    }

    return (
        <div >
            <div data-testid='the-todo' className={props.todo.done ? 'selected' : ''}
                 onClick={toggle}>{props.todo.title} </div>
            <button className={props.todo.done ? 'selected-button' : ''} onClick={deleteTodo}>Effacer</button>
            <Link to={'/Todolist/'+ props.todo.id}>beschreibungs</Link>
        </div>
    )

}