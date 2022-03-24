import React from 'react';
import TodoList from "./TodoList";
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TodoDetails from "./TodoDetails";
import Login from "./Login";
import Register from "./Register";

function App() {

    // @ts-ignore
    return (
        <div>
            <h1>Ma Todolist </h1>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Login/>}/>
                    <Route path='login' element={<Login/>}/>
                    <Route path='Register' element={<Register/>}/>
                    <Route path='TodoList' element={<TodoList/>}/>
                    <Route path='Todolist/:TodoId' element={<TodoDetails/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
