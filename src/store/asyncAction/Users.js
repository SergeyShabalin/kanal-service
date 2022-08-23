import {Api} from "../../components/Api";
import {addAllUsers} from "../reducers/usersReducer";

export function axiosUsers() {

    return function (dispatch) {
        Api.get(`/users`).then((resp) => {
            dispatch(addAllUsers(resp.data))
        }).catch((error) => {
            console.warn(error, 'server error');
        })
    }

}