import React, {useEffect, useState} from "react";
import TodoForm from "./TodoForm";
import * as PropTypes from "prop-types";

export default TodoList

function Todo(props) {
    return null;
}

Todo.propTypes = {
    completetodo: PropTypes.func,
    todos: PropTypes.arrayOf(PropTypes.any)
};

function TodoList() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8090/todo')


            .then(response => response.json())
            .then(body => setTodos(body))
    }, [])

    const addTodo = todo => {


        const newTodos = [todo, ...todos]

        setTodos(newTodos)

    };
    const removeTodo= id => {
        const removeArr =[...todos].filter(todo =>todo.id !==id)
        setTodos(removeArr)
    }


    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }

            return todo
        })
        setTodos(updatedTodos);
    }


    return (

        <div>
            <h1> What do i need for my trip </h1>
            < TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />

        </div>
    );

}