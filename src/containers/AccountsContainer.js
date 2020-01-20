import React from 'react';
import { connect } from 'react-redux';
import {Route} from 'react-router-dom';
import {fetchAccounts} from '../actions/fetchAccounts';
import AccountForm from '../components/AccountForm';
import AccountList from '../components/AccountList';
import AccountShowPage from '../components/AccountShowPage';

class AccountsContainer extends React.Component {

  componentDidMount(){
    this.props.fetchAccounts()
  }

  render(){
    return(
      <div>
        <Route path='/accounts/new' component={AccountForm}/>
        <Route path='/accounts/:id' render={(routerProps)=> <AccountList {...routerProps} accounts={this.props.accounts}/>}/>
        <Route exact path='/accounts' render={(routerProps)=> <AccountList {...routerProps} accounts={this.props.accounts}/> }/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    accountList: state.accountList
  }
}

export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer)
