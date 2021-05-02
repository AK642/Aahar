import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from './Authentication/AuthContext';
import Login from './Authentication/Login';
import Registration from './Authentication/Registration';
import Home from './Home/Home';
import ForgotPassword from './Authentication/ForgotPassword'
import Restaurant from './Restaurant/Restaurant';
import Food from './Food/Food';
import Cart from './Cart/Cart';
import Reviews from './Review/Reviews';
import Review from './Review/Review';
import Order from './Orders/Order';

function App() {
  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Registration />
            </Route>
            <Route path="/forgot-password">
              <ForgotPassword />
            </Route>
            <Route path="/restaurant/:id">
              <Restaurant />
            </Route>
            <Route path="/food/:id">
              <Food />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/reviews/:id">
              <Reviews />
            </Route>
            <Route path="/review">
              <Review />
            </Route>
            <Route path="/orders">
              <Order />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
