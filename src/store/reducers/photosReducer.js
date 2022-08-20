const ADD_PHOTOS = 'ADD_PHOTOS'
const ADD_ALL_PHOTOS = 'ADD_ALL_PHOTOS'

const defaultState={
    photos: {}
}

export default  function photosReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_ALL_PHOTOS:
            return{...state, photos:{ ...state.photos, ...action.payload}}
        case ADD_PHOTOS:
            return{...state, photos: [...state.photos, action.payload]}

        case 'DIS_PHOTOS':
            return{...state, count: state.count - action.payload}
        default:
            return (state)
    }
}

export const addPhoto = (payload)=>({type: ADD_PHOTOS, payload})
export const addAllPhoto = (payload)=>({type: ADD_ALL_PHOTOS, payload})