export default function accountReducer(state = {accountList: []}, action){
  switch (action.type) {
    case 'FETCH_ACCOUNTS':
      return {accountList: action.payload}

    default:
      return state

  }
}
