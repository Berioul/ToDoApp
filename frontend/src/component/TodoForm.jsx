import {useState} from "react";


export default function TodoForm(props) {
    const [input, setInput] = useState('');
    const handleChange = e => {
        setInput(e.target.value);

    }
    const handleSubmit = e => {
        e.preventDefault()
        fetch('http://localhost:8090/todo',{
            method: 'post',
            body: JSON.stringify({title:input}),
            headers:{
                'Content-Type': 'application/json'
            }

        }).then (()=> console.log('youpi'))




       /*props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        })
        setInput('')

        */










    }

    return (
        <form className='todo -form' onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='add a todo'
                value={input}
                className='todo-inp'
                onChange={handleChange}
            />
            <button className='todo-button'>add todo</button>
        </form>

    )
}


