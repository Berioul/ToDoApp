import {render,screen} from "@testing-library/react";
import TodoItem from "./TodoItem";
import {MemoryRouter} from "react-router-dom";



test('this Todo is correct ',() =>{
    const todo={id: '253465',title: 'electronique de bord',beschreibung:'Garmin GPSMAP',done:true}
    const {getByTestId} = render(<TodoItem todo={todo} onTodoChange={()=>{}} onTodoDeletion={()=>{}} />,{wrapper:MemoryRouter})
    expect(getByTestId('the-todo').textContent).toEqual('electronique de bord ');
});