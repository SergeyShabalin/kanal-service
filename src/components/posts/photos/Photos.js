import React, {useEffect, useState} from "react";
import {Api} from "../../Api";

export default function Photos({userId}){

    const [photos, setPhotos] = useState([])

    useEffect(() => {
        Api.get(`/photos/${userId}`).then((resp) => {
            setPhotos(resp.data)
        }).catch((error) => {
            console.warn(error, 'server error');
        })
    }, []);

    return (
        <div>
            <img className='img' src={photos?.thumbnailUrl}></img>
        </div>
    )

}





























//
//
//
//
//
// const ps = [
//     {
//         id:1,
//         uid:1,
//         phid:1
//     },
//     {
//         id:2,
//         uid:2,
//         phid:2
//     },
//     {
//         id:3,
//         uid:3,
//         phid:3
//     },
//     {
//         id:4,
//         uid:4,
//         phid:4
//     },
//
// ]
// const us = [
//     {
//         id:1,
//         nane:'name 1'
//     },
//     {
//         id:2,
//         nane:'name 2'
//     },
//     {
//         id:3,
//         nane:'name 3'
//     },
//     {
//         id:4,
//         nane:'name 4'
//     },
//     {
//         id:5,
//         nane:'name 5'
//     },
//
// ]
// const phs = [
//     {
//         id:1,
//         url:'111',
//     },
//     {
//         id:2,
//         url:'111',
//     },
//     {
//         id:3,
//         url:'111',
//     },
//     {
//         id:4,
//         url:'111',
//     },
//
// ]
// axios.get('posts')
// axios.get('users')
// axios.get('photos')