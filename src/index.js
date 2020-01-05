import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './components/home'
import About from './components/about'
import Login from './components/login'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () =>
  <div>
    <NavLink
      to="/"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
      >Home</NavLink>
    <NavLink
      to="/components/about"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
      >About</NavLink>
    <NavLink
      to="/components/login"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
      >Login</NavLink>
  </div>;


ReactDOM.render((
  <Router>
    <React.Fragment>
    <br/>
    <Navbar />
      <Route exact path="/components/home" component={Home} />
      <Route exact path="/components/about" component={About} />
      <Route exact path="/components/login" component={Login} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);
