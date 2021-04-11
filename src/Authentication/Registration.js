import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import '../assets/scss/Registration.scss';
import { useAuth } from "./AuthContext"
import {Link, useHistory} from 'react-router-dom';
// import { auth } from "../firebase";
import { Alert } from "react-bootstrap"


const Registration = () => {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const registration = async e => {

        e.preventDefault();
        //TODO: Add Better Error Message
        if(password !== cpassword){
            return setError("Password and Confirm Password must be same!");
        }

        try {
            setError("")
            setLoading(true)
            await signup(email, password)
            history.push("/")
        }catch {
            setError("Failed to create an account")
        }
        setLoading(false)
    }

    if (error) {
        setTimeout(() => {
            setError('')
        }, 3000)
    }

    return (
        <div className="register">
            <div className="register__title">
                <h1>Registration</h1>
            </div>
            {error && <Alert variant="danger">{error}</Alert>}
            <div className="register__form">
                <form>
                    <div className="label">
                        <label for="name">Name</label>
                    </div>
                    <input type="text" placeholder="Name" required />
                    <div className="label">
                        <label for="email">Email</label>
                    </div>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
                    <div className="label">
                        <label for="password">Password</label>
                    </div>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
                    <div className="label">
                        <label for="password">Confirm Password</label>
                    </div>
                    <input type="password" value={cpassword} onChange={e => setCPassword(e.target.value)} placeholder="Confirm Password" required />
                    <div className="button__link">
                        <Button disabled={loading} className="button" type="submit" onClick={registration}>
                            Register
                        </Button>
                    </div>
                </form>
            </div>
            <div className="login__link">
                <span className="text">Already have account?</span><Link to="/login">SignIn</Link>
            </div>
        </div>
    )
}

export default Registration
