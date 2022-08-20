const VIEW_ALL_POSTS = 'VIEW_ALL_POSTS'


const defaultState={
    posts: []
}

export default  function postsReducer(state = defaultState, action) {
    switch (action.type) {

        case VIEW_ALL_POSTS:
            return{...state, posts:[...state.posts, ...action.payload]}

        default:
            return (state)
    }
}

export const addAllPosts = (payload)=>({type: VIEW_ALL_POSTS, payload})
