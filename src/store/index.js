import {createStore, combineReducers, applyMiddleware} from 'redux'
import postsReducer from "./reducers/postsReduser";
import usersReducer from "./reducers/usersReducer";
import autorizationReducer from "./reducers/AutorizationReducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer,
    autorization: autorizationReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))