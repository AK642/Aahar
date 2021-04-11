import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import '../assets/scss/ForgotPassword.scss';
import { Alert } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useAuth } from "./AuthContext"

const ForgotPassword = () => {

    const [email, setEmail] = useState('');
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    const setPassword = async e => {
        e.preventDefault();

        try {
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(email)
            setMessage("Check your inbox for further instructions")
        }catch {
            setError("Failed to reset password")
        }
    
        setLoading(false)   
    }

    if (error) {
        setTimeout(() => {
            setError('')
        }, 3000)
    }

    if (message) {
        setTimeout(() => {
            setMessage('')
        }, 3000)
    }

    return (
        <div className="forgotPassword">
            <div className="forgotPassword__title">
                <h1>Password Reset</h1>
            </div>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <div className="forgotPassword__form">
                <form>
                    <div className="label">
                        <label for="email">Email</label>
                    </div>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
                    <div className="button__link">
                        <Button disabled={loading} className="button" type="submit" onClick={setPassword}>
                            Reset Password
                        </Button>
                        
                    </div>
                    <div className="login__link">
                        <Link to="/login">Login</Link>
                    </div>
                </form>
            </div>
            <div className="register__link">
                <span className="text">Don't have account?</span><Link to="/register">SignUp</Link>
            </div>
        </div>
    )
}

export default ForgotPassword
