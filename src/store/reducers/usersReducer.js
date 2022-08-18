const ADD_AUTOR = 'ADD_AUTOR'
const DIS_AUTOR = 'DIS_AUTOR'

const defaultState={
    count: 0
}

export default  function usersReducer(state = defaultState, action) {
    switch (action.type) {

        case ADD_AUTOR:
            return{...state, count: state.count + action.payload}

        case DIS_AUTOR:
            return{...state, count: state.count - action.payload}
        default:
            return (state)
    }
}

export const addNewAutor = (payload)=>({type: ADD_AUTOR, payload})
export const disAutor = (payload)=>({type: DIS_AUTOR, payload})