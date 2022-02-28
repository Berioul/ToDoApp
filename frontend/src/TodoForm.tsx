import { useState } from "react"
import { Todo } from "./model";

interface TodoFromProps {
    onTodoCreation: () => void;

}

export default function TodoForm(props: TodoFromProps) {

    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');

    const addTask = () => {
        fetch('http://localhost:8090/todo', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({title:task})
        })

            .then(()=> props.onTodoCreation())
    }

    return (
        <div>
            <input type="text" placeholder="Aufgabe" value={task} onChange={ev => setTask(ev.target.value)}/>
            <input type="text" placeholder="Beschreibung" value={description}
                   onChange={ev => setDescription(ev.target.value)}/>
            <button onClick={addTask}>ajouter</button>
        </div>
    )
}