import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from './Authentication/AuthContext';
import Login from './Authentication/Login';
import Registration from './Authentication/Registration';
import Header from './Components/Header';
import Home from './Home/Home';
import ForgotPassword from './Authentication/ForgotPassword'

function App() {
  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <Switch>
            <Route path="/login">
              <Header />
              <Login />
            </Route>
            <Route path="/register">
              <Header />
              <Registration />
            </Route>
            <Route path="/forgot-password">
              <Header />
              <ForgotPassword />
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
