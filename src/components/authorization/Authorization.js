import React from 'react'
import {useSelector} from "react-redux";

import Posts from "../posts/Posts";
import Verification from "./Verification";

export default function Autorization() {

    const access = useSelector(state => state.autorization.access)

    return (
        <div> {access ? <Posts/> :
           <Verification/>}
        </div>
    )
}