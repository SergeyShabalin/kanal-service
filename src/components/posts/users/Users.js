import React, {useEffect, useState} from 'react'
import {Api} from "../../Api";


export default function Users({userId}) {

    const [userList, setUserList] = useState({})

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


    return (
        <div>
           <div>Autor: {userList.name}</div>
            <div>Company: {userList?.company?.name}</div>
        </div>
    )
}