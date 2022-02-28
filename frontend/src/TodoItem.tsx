import { Todo} from "./model";
import './TodoItem.css'

interface TodoItemProps {
    todo: Todo
    onTodoDeletion: () => void;
    onTodoChange: (todos: Array<Todo>) => void;
}

export default function TodoItem(props: TodoItemProps) {

    const deleteTodo = () => {
        fetch(`http://localhost:8090/todo/${props.todo.id}`, {
            method: 'DELETE'
        })
            .then(() => props.onTodoDeletion());
    };

    const toggle = () => {

        fetch(`http://localhost:8090/todo/${props.todo.id}`, {
            method: 'PUT',

        })
            .then(() => props.onTodoDeletion());
    }

    return (
        <div>
            <div className={props.todo.done ? 'selected' : ''}
                 onClick={toggle}>{props.todo.title} </div>
            <button className='touche effacer' onClick={deleteTodo}>Löschen</button>
        </div>
    )

}