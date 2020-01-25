import React from 'react';
import { connect } from 'react-redux';
import AccountsContainer from './containers/AccountsContainer';
import fetchAccounts from './actions/fetchAccounts';

class App extends React.Component {

  render (){
    return (
       <div className="App">
          <AccountsContainer/>
       </div>
    );
  }
}


export default App;
