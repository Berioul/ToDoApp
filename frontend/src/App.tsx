import React from 'react';
import TodoList from "./TodoList";
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TodoDetails from "./TodoDetails";

function App() {

    return (
        <div>
            <h1>All i need to travel</h1>

            <BrowserRouter>


                <Routes>
                    <Route path='TodoList' element={<TodoList/>}/>
                    <Route path='Todolist/:TodoId' element={<TodoDetails/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
