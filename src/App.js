import React from 'react';
import './App.css';
import './index.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {

  componentDidMount(){
    fetch('http://localhoust:3000/api/v1/accounts')
      .then(response => response.json())
      .then(date => console.log(data))
    }

  render (){
    return (
       <div className="App"></div>
    );
  }
}

export default App;
