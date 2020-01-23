export const addChoice = (choice, accountId) => {

  return(dispatch) => {
    fetch(`http://localhost:3000/api/v1/accounts/${accountId}/choices`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(choice)
    })
      .then(response => response.json())
      .then(account => dispatch({type:'ADD_CHOICE', payload:account}))
  }
}
