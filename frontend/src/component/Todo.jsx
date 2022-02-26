import React, {useState} from 'react';

export default function Todo({todos, completeTodo, removeTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });
    return todos.map((todo, index) => (
        <div
            className={todo.done ? 'todo-row complete' : 'todo-row'}
            key={index}
        >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.title}
            </div>
            <div className='icons'>
                <button onClick={() => removeTodo(todo.id)} className='delete-icon'>Löschen</button>
                <button onClick={() => setEdit({id: todo.id, value: todo.title})} className='edit-icon'>Edit</button>
            </div>
        </div>

    ));
}



