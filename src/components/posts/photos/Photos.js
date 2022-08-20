import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {axiosPhotos} from "../../../store/asyncAction/Photos";

export default function Photos({userId}){


    // const [photos, setPhotos] = useState([])
    const dispatch = useDispatch()
    const photos = useSelector(state => state.photos.photos)


    useEffect(() => {

    }, []);

    // function viewPhotos() {
    //     Api.get(`/photos/${userId}`).then((resp) => {
    //         setPhotos(resp.data)
    //     }).catch((error) => {
    //         console.warn(error, 'server error');
    //     })
    // }


    return (
        <div onClick={()=>dispatch(axiosPhotos(userId))}>
            <img className='img' src={photos?.thumbnailUrl}></img>
        </div>
    )

}