import {Api} from "../../components/Api";
import {addAllUsers} from "../reducers/usersReducer";


export function axiosUsers(userId) {

    return function (dispatch) {
        Api.get(`/users/${userId}`).then((resp) => {
             dispatch(addAllUsers(resp.data))
        }).catch((error) => {
            console.warn(error, 'server error');
        })
    }

}