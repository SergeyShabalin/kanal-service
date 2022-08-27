const CHANGE_ACCESS = 'CHANGE_ACCESS'


const defaultState = {
    access: false,
    loginPass: {
        login: '123',
        pass: '321'
    }

}

export default function autorizationReducer(state = defaultState, action) {
    switch (action.type) {

        case CHANGE_ACCESS:
            return {...state, access: action.payload}

        default:
            return (state)
    }
}

export const changeAccess = (payload) => ({type: CHANGE_ACCESS, payload})
