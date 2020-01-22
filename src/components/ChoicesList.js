import React from 'react';

const ChoicesList = (props) => {
  return (
    <div>
      {props.choicesList && props.choicesList.map(choice =>
        <li key={choice.id}>{choice.name} - {choice.description} </li>
      )}
    </div>
  )
}

export default ChoicesList
