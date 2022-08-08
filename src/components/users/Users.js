import React, {useEffect, useState} from 'react'
import {Api} from "../Api";
export default function Users(){


    useEffect(() => {
        viewUsers()
    }, []);


    function viewUsers() {

        Api.get('/Users').then((resp) => {
            console.log(resp.data)
        }).catch((error) => {
            console.warn(error, 'server error');
        })
    }

    return(
        <div>users</div>
    )
}