import React, {useState} from "react";
import {useNavigate} from "react-router-dom";


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const login = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/api/auth/login`, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({email: email, password: password})
        })

            .then(response => response.text())
            .then((token)=>{
                localStorage.setItem('token',token)
            })
            .then(() => navigate('/TodoList'))

    }


    return (
        <div className="login">

            <input className='login' type="email" placeholder={"email"} value={email}
                   onChange={ev => setEmail(ev.target.value)}/>
            <input className='password' type="password" placeholder={"password"} value={password}
                   onChange={ev => setPassword(ev.target.value)}/>
            <button onClick={login}>Login</button>

        </div>
    )
}