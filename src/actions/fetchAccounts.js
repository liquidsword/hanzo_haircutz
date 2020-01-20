export function fetchAccounts(action){
  return(dispatch) => {
    fetch('http://localhost:3000/api/v1/account')
      .then(resp => resp.json())
      .then(accounts => dispatch({
        type: 'FETCH_ACCOUNTS',
        payload: accounts
      }))
    }
  }
