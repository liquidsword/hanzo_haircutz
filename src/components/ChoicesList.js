import React from 'react';
import {connect} from 'react-redux';
import {deleteChoice} from '../actions/deleteChoice'

const ChoicesList = (props) => {

  console.log(props.choicesList)

  const handleDelete = (accountId, choiceId) => {
    props.deleteChoice(choice.id, choice.account_id)
  }

  return (
    <div>
      {props.choicesList && props.choicesList.map(choice =>
        <li key={choice.id}>{choice.name} - {choice.description} <button onClick={() => handleDelete(choice)}>Delete</button> </li>
      )}
    </div>
  )
}

export default connect(null, {deleteChoice})(ChoicesList)
