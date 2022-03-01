import React from 'react';
import TodoList from "./TodoList";
import './App.css'

function App() {

    return (

        <div>
            <h1 className='entête'>All i need to travel</h1>
            <div className='skelett'><TodoList/></div>
        </div>
    );
}

export default App;
