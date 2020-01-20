import React from 'react';
import Account from './AccountShowPage'
import {Route} from 'react-router-dom';

const AccountList = (props) => {

  return (
    <div>
      {props.accountList.map(account =>
        <div key={account.id}><Account account={account}/></div>)}
    </div>
  )
}

export default AccountList
