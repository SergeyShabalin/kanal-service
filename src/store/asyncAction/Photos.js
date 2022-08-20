import {Api} from "../../components/Api";
import {addAllPhoto} from "../reducers/photosReducer";

export function axiosPhotos(userId) {
    console.log(userId)
    return function (dispatch) {
        Api.get(`/photos/${userId}`).then((resp) => {
             dispatch(addAllPhoto(resp.data))
            console.log(resp.data)
        }).catch((error) => {
            console.warn(error, 'server error');
        })
    }

}