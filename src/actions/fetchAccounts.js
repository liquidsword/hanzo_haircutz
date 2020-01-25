export function fetchAccounts(){

  return(dispatch) => {
    fetch('http://localhost:3000/api/v1/accounts')
      .then(resp => resp.json())
      .then(accountList => dispatch({
        type: 'FETCH_ACCOUNTS',
        payload: accountList
      }))
    }
  }
