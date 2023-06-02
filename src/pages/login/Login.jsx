import "./login.css";
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SensorDoorOutlined } from "@mui/icons-material";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://cors-anywhere.herokuapp.com/localhost:8080/login', {
              email: 'admin@mail.com',
              password: 'admin'
            });
        
            // const token = response.data.token;
            const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBtYWlsLmNvbSIsImlhdCI6MTY4NTM4MTIxNywiZXhwIjoxNjg1NDY3NjE3fQ.PM3bHg0sayuNbM1JSue6DTChI-NFcc1xeHsllHYning';
            console.log(token); // Обработка полученного токена
          } catch (error) {
            console.error(error);
            // Обработка ошибок
          }
    };
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="logo">
                    WeSocial
                </div>
                <div className="loginFormWrapper">
                    <div className="loginForm">
                        <form onSubmit={handleSubmit}>
                            <label>
                                <div className="loginText">
                                    Email:
                                </div>
                                <input type="email" value={email} onChange={handleEmailChange} />
                            </label>

                            <br />
                            <label>
                                <div className="loginText">
                                    Password:
                                </div>
                                <input type="password" value={password} onChange={handlePasswordChange} />
                            </label>
                            <br />
                            <SensorDoorOutlined />
                            <button type="submit">Sign In</button>
                        </form>
                        <p>Don't have an account yet?</p>
                        <div className="buttonToRegister">
                            <Link className="link" to="/register">Create an account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
