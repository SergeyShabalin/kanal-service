import React, {useEffect, useState} from 'react'
import {Api} from "../../Api";
import {useDispatch, useSelector} from "react-redux";
import {addNewAutor, disAutor} from "../../../store/reducers/usersReducer";
import {addPhoto} from "../../../store/reducers/photosReducer";


export default function Users({userId}) {

    const [userList, setUserList] = useState({})

    const dispatch = useDispatch()
    const autor = useSelector(state => state.users.count)
    const photos = useSelector(state=> state.photos.photos)

    useEffect(() => {
        viewUsers()
    }, []);

    function viewUsers() {
        Api.get(`/users/${userId}`).then((resp) => {
            setUserList(resp.data)
        }).catch((error) => {
            console.warn(error, 'server error');
        })
    }

    function addCount(param) {
        dispatch(addNewAutor(param))
    }

    function disCount(param) {
        dispatch(disAutor(param))
    }

    function addPhot(param){
        dispatch(addPhoto(param))
    }

    return (
        <div>
            <button onClick={() => addCount(2)}>+++</button>
            <button onClick={() => disCount(3)}>---</button>
            <button onClick={()=>addPhot('new')}>add</button>
            <div>{autor}</div>
            <div>{photos.map(photo=>(
                <div>{photo}</div>
                )

            )}</div>
            <div>Autor: {userList.name}</div>
            <div>Company: {userList?.company?.name}</div>
        </div>
    )
}