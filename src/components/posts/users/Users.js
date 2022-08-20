import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {axiosUsers} from "../../../store/asyncAction/Users";


export default function Users({userId}) {


    const dispatch = useDispatch()
    const autors = useSelector(state => state.users.users)


    useEffect(() => {

    }, []);

    return (
        <div>

            <button onClick={() => dispatch(axiosUsers(userId))}>addUS</button>

            <div>{autors.name}</div>

            {/*<div>{photos.map(photo=>(*/}
            {/*    <div>{photo.name}</div>*/}
            {/*    )*/}

            {/*)}</div>*/}
            {/*<div>Autor: {userList.name}</div>*/}
            {/*<div>Company: {userList?.company?.name}</div>*/}
        </div>
    )
}