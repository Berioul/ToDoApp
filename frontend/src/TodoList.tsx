import {useEffect, useState} from "react"
import {Todo} from "./model";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function TodoList() {

    const [todos, setTodos] = useState([] as Array<Todo>);


    const fetchAll = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/todo`, {
            method: 'GET',
            headers: {

                'Authorization': `Bearer ${localStorage.getItem('token')}`

            }

        })
            .then(response => response.json())
            .then(data => setTodos(data))
    }
    useEffect(() => {
        fetchAll();
    }, []);

    return (
        <div>
            <TodoForm onTodoCreation={fetchAll}/>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo} onTodoDeletion={fetchAll} onTodoChange={setTodos}/>)}
        </div>
    )

}