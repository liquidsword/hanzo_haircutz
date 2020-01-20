export default function accountReducer(state = {accountList: []}, action){
  switch (action.type) {
    case 'FETCH_ACCOUNTS':
      return {accountList: action.payload}
    case 'ADD_ACCOUNT':
      return {...state, accounts: [...state.accounts,action.payload]}
    default:
      return state

  }
}
