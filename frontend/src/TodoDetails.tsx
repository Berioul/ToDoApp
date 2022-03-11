import {useEffect, useState} from "react";
import {Todo} from "./model";
import {Link, useParams} from "react-router-dom";


export default function TodoDetails(){
    const [todo,setTodo] = useState({} as Todo);
      const params = useParams()

    useEffect(()=> {
        fetch(`${process.env.REACT_APP_BASE_URL}/todo/`+ params.TodoId)
            .then(response => response.json())
            .then((todo:Todo)=>setTodo(todo))
    },[params.TodoId]);
      return(

          <div>
              {todo.beschreibung &&
            <div>
                      <ul>
                          <li >Beschreibung:{todo.beschreibung}</li>

                      </ul>
                  <Link className='retour' to='/TodoList'>retour</Link>
          </div>
              }

          </div>
      )


    }

