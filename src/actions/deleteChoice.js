export const deleteChoice = (choiceId, accountId) => {

  return (dispatch) => {
    return fetch(`http://localhost:3000/api/v1/accounts/${accountId}/choices/${choiceId}`, {
      method: 'DELETE'
    })
    .then(response => response.json)
    .then(account => dispatch({type: 'DELETE_CHOICE', payload: account}))
  }
}
