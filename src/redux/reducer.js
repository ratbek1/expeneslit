import uniqId from "uniqid";

const defaultState = {
     balance: 20000,
     expenses: 0,
     expList: [],
     expItem: {},
     id: uniqId()
 }

 export const Reducer = (state= defaultState, action) => {
    switch (action.type) {
        case "CREATE_EXP_LIST" :
            state.expItem = {...action.payload}
            state.balance = state.balance - state.expItem.expenses
            state.expenses = state.expenses + +state.expItem.expenses
            return {...state, expList:  [...state.expList, state.expItem]}
        case "DELETE_EXP_LIST" :
            return null
        default :
            return state
     }
 }