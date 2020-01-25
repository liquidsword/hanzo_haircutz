export default function accountReducer(state = {accountList: []}, action){
  switch (action.type) {
    case 'FETCH_ACCOUNTS':
      return {accountList: action.payload}
    case 'ADD_ACCOUNT':
      return {...state, accountList: [...state.accountList, action.payload]}
    case 'ADD_CHOICE':
      let accounts = state.accountList.map(account => {
        if (account.id === action.payload.id) {
          return action.payload
        } else {
            return account
          }
      })
      return {...state, accountList: accounts}
    case 'DELETE_CHOICE':
      let accountsChoiceDelete = state.accountList.map(account => {
        if (account.id === action.payload.id) {
          return action.payload
        } else {
            return account
          }
      })
      return {...state, accountList: accountsChoiceDelete}
    default:
      return state
  }
}
