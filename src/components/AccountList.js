import React from 'react';

const AccountList = ({props}) => {

  return (
    <div>
      {props.accountList.map(account => <li key={account.id}>{account.name}</li>)}
    </div>
  )
}

export default AccountList
