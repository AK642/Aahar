import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import '../assets/scss/Login.scss';
import { Alert } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from "./AuthContext"

// import { auth } from '../firebase';

const Login = () => {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const signIn = async e => {
        e.preventDefault();

        try {
            setError("")
            setLoading(true)
            await login(email, password)
            history.push("/")
        }catch {
            setError("Failed to log in")
        }
    
        setLoading(false)   
    }

    if (error) {
        setTimeout(() => {
            setError('')
        }, 3000)
    }

    return (
        <div className="login">
            <div className="login__title">
                <h1>Login</h1>
            </div>
            {error && <Alert variant="danger">{error}</Alert>}
            <div className="login__form">
                <form>
                    <div className="label">
                        <label for="email">Email</label>
                    </div>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
                    <div className="label">
                        <label for="password">Password</label>
                    </div>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
                    <div className="button__link">
                        <Button disabled={loading} className="button" type="submit" onClick={signIn}>
                            Log in
                        </Button>
                    </div>
                    <div className="forgotPassword__link">
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                </form>
            </div>
            <div className="register__link">
                <span className="text">Don't have account?</span><Link to="/register">SignUp</Link>
            </div>
        </div>
    )
}

export default Login
