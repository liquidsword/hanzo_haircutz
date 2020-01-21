import React from 'react';
import {Redirect} from 'react-router-dom';
import ChoicesContainer from '../containers/ChoicesContainer'

const Account = (props) => {

  let account = props.accountList[props.match.params.id - 1]
  console.log(account)

  return (
    <div>
        <h2>
          {account ? account.name : null} - {account ? account.choice : null}
        </h2>
        <ChoicesContainer account={account}/>
      </div>
  )
}

export default Account
