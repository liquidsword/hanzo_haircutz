import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//      <div>
//        <nav>
//          <ul>
//            <li>
//              <Link to="/">Home</Link>
//            </li>
//            <li>
//              <Link to="/login">Login</Link>
//            </li>
//            <li>
//              <Link to="/scheduler">Scheduler</Link>
//            </li>
//          </ul>
//        </nav>
//
//        <Switch>
//          <Route path="/login">
//            <Login />
//          </Route>
//          <Route path="/scheduler">
//            <Scheduler />
//          </Route>
//          <Route path="/">
//            <Home />
//          </Route>
//        </Switch>
//      </div>
//    </Router>
//   );
// }
//
// function Home() {
// return <h2>Home</h2>;
// }
//
// function Login() {
// return <h2>Login</h2>;
// }
//
// function Scheduler() {
// return <h2>Users</h2>;
// }
