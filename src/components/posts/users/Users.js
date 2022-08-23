import React from 'react'
import {useSelector} from "react-redux";


export default function Users({userId}) {

    const users = useSelector(state => state.users.users)
    const currentUser = users.find(user => user.id === userId)

    return (
        <div>
            <div>Autor: {currentUser?.name}</div>
            <div>Company: {currentUser?.company.name}</div>
        </div>
    )
}