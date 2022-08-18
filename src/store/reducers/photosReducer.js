const ADD_PHOTOS = 'ADD_PHOTOS'


const defaultState={
    photos: [1,2,3]
}

export default  function photosReducer(state = defaultState, action) {
    switch (action.type) {

        case ADD_PHOTOS:
            return{...state, photos: [...state.photos, action.payload]}

        case 'DIS_PHOTOS':
            return{...state, count: state.count - action.payload}
        default:
            return (state)
    }
}

export const addPhoto = (payload)=>({type: ADD_PHOTOS, payload})