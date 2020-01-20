export const addAccount = (data) => {

  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/account', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(account => dispatch({type: 'ADD_account', payload: account}))
  }
}
