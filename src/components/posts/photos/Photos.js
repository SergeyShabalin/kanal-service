import React, {useEffect, useState} from "react";
import {Api} from "../../Api";

export default function Photos({userId}){
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        viewPhotos()
    }, []);

    function viewPhotos() {
        Api.get(`/photos/${userId}`).then((resp) => {
            setPhotos(resp.data)
        }).catch((error) => {
            console.warn(error, 'server error');
        })
    }


    return (
        <div>
            <img className='img' src={photos?.thumbnailUrl}></img>
        </div>
    )

}