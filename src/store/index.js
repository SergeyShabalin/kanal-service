import {createStore, combineReducers} from 'redux'
import usersReducer from "./reducers/usersReducer";
import photosReducer from "./reducers/photosReducer";


const rootReducer = combineReducers({
    users: usersReducer,
    photos: photosReducer
})

export const store = createStore(rootReducer)