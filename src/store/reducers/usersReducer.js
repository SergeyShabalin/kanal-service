const ADD_ALL_USERS = 'ADD_ALL_PHOTOS'

const defaultState={
    users: []
}

export default  function usersReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_ALL_USERS:
            return{...state, users:[ ...state.users, ...action.payload]}

        default:
            return (state)
    }
}

export const addAllUsers = (payload)=>({type: ADD_ALL_USERS, payload})