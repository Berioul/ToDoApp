import {useEffect, useState} from "react"
import './TodoForm.css'
import {useTranslation} from "react-i18next";

interface TodoFormProps {
    onTodoCreation: () => void;
}

export default function TodoForm(props: TodoFormProps) {

    const [task, setTask] = useState(localStorage.getItem('Aufgabe') ?? '');
    const [description, setDescription] = useState(localStorage.getItem('Beschreibung') ?? '');
    const {t} = useTranslation();

    useEffect(() => {
        localStorage.setItem('Aufgabe', task)
        localStorage.setItem('Beschreibung', description)
    }, [task, description])
    const addTask = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/todo`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`

            },
            body: JSON.stringify({title: task, beschreibung: description})
        })

            .then(() => {
                props.onTodoCreation()
                setTask('')
                setDescription('')
            })
    }

    return (
        <div className='forms'>
            <input className='aufgabe' type="text" placeholder={t("task")} value={task}
                   onChange={ev => setTask(ev.target.value)}/>
            <input className='aufgabe' type="text" placeholder={t("description")} value={description}
                   onChange={ev => setDescription(ev.target.value)}/>
            <button onClick={addTask}>Add</button>
        </div>
    )

}