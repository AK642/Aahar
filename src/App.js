import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from './Authentication/AuthContext';
import Login from './Authentication/Login';
import Registration from './Authentication/Registration';
import Home from './Home/Home';
import ForgotPassword from './Authentication/ForgotPassword'

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
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
