import {createStore, combineReducers, applyMiddleware} from 'redux'
import postsReducer from "./reducers/postsReduser";
import usersReducer from "./reducers/usersReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))