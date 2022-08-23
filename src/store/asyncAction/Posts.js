import {Api} from "../../components/Api";
import {addAllPosts} from "../reducers/postsReduser";


export function axiosPosts() {
    return function (dispatch) {
        Api.get(`/posts`).then((resp) => {
            dispatch(addAllPosts(resp.data))
        }).catch((error) => {
            console.warn(error, 'server error');
        })
    }
}