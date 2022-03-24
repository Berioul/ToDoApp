import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const register = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/api/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: email, password: password})
        })
            .then(() => navigate('/Login'))
    }

    return (
        <div>

            <input className='aufgabe' type="email" placeholder={"email"} value={email}
                   onChange={ev => setEmail(ev.target.value)}/>
            <input className='aufgabe' type="password" placeholder={"password"} value={password}
                   onChange={ev => setPassword(ev.target.value)}/>
            <button onClick={register}>Register</button>

        </div>

    )
}
