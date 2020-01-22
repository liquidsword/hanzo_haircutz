export default function accountReducer(state = {accountList: []}, action){
  switch (action.type) {
    case 'FETCH_ACCOUNTS':
      return {accountList: action.payload}
    case 'ADD_ACCOUNT':
      return {...state, accounts: [...state.accounts, action.payload]}
    case 'ADD_CHOICE':
      let accounts = state.accounts.map(account => {
        if (account.id === action.payload.id) {
          return action.payload
        } else {
            return account
          }
      })
    default:
      return state
  }
}
