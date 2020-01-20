import React from 'react';

const AccountList = (props) => {

  return (
    <div>
      {props.accountList.map(account => <li key={account.id}>{account.name}> - {account.choice}</li>)}
    </div>
  )
}

export default AccountList
