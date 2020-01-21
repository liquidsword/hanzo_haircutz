import React from 'react';
import {Route, Link} from 'react-router-dom';
import Account from './AccountShowPage';


const AccountList = (props) => {

  return (
    <div>
      {props.accountList.map(account =>
        <li key={account.id}>
          <Link to={`/accounts/${account.id}`}>{account.name}</Link>
        </li>)}
    </div>
  )
}

export default AccountList
