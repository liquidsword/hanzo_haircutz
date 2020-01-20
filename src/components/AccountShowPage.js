import React from 'react';

const accountShowPage = (props) => {

  let account = props.accountList[props.match.params.id - 1]

  return (
    <li>
      {account ? account.name : null} - {account ? account.choice : null}
    </li>
  )
}

export default accountShowPage
