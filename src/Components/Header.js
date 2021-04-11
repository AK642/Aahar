import React, { useState } from 'react';
import logo from '../assets/images/FoodLand_LOGO.png';
import Container from '@material-ui/core/Container';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Alert } from "react-bootstrap"
import '../assets/scss/Header.scss';
import { useAuth } from "../Authentication/AuthContext"
import { Link } from "react-router-dom"


const Header = () => {

    const { currentUser, logout } = useAuth()
    const [error, setError] = useState("")

    const n = currentUser?.email.length - 10;
    const userName = currentUser?.email.substr(0, n);

    const handleLogout = async () => {
        setError("")

        try {
            await logout()
        }catch {
            setError("Failed to log out")
        }
    }


    return (
        <div className="header">
            <Container maxWidth="lg" className="container">
                <nav>
                    <div className="logo">
                        <img src={logo} alt="FoodLand"></img>
                    </div>
                    <h3>Welcome, {currentUser ? userName : "Guest"}</h3>
                    <div className="nav__links">
                        <ul>
                            <li><Link to="/" className="link">Home</Link></li>
                            <li><Link to="/menu" className="link">Restaurants</Link></li>
                            <li><Link to="/offers" className="link">Services</Link></li>
                            <li><Link to="/" className="link">My Orders</Link></li>
                            <li><Link to={!currentUser && '/login'} className="link" onClick={handleLogout}>{currentUser ? 'LogOut' : 'LogIn'}</Link></li>
                            <li><Link to="/cart" className="cart__link"><span className="cart__length">0</span><ShoppingCartIcon /></Link></li>
                        </ul>
                    </div>
                </nav>
                {
                    error && <Alert variant="danger">{error}</Alert>
                
                }
            </Container>
        </div>
    )
}

export default Header