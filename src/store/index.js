import {createStore, combineReducers, applyMiddleware} from 'redux'
import usersReducer from "./reducers/usersReducer";
import photosReducer from "./reducers/photosReducer";
import postsReducer from "./reducers/postsReduser";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    users: usersReducer,
    photos: photosReducer,
    posts:  postsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))