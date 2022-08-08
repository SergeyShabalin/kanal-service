import React, {useEffect, useState} from 'react'
import {Api} from "../Api";

export default function Posts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        viewPosts()
    }, []);


    function viewPosts() {

        Api.get('/Posts').then((resp) => {
            setPosts(resp.data)
        }).catch((error) => {
            console.warn(error, 'server error');
        })
    }


    function drawPosts() {
        const post = posts.map(item => {
            return (
                <div key={item.id}>{item.title}</div>
            )
        })
        return post
    }

    return (
        <div>{drawPosts()}</div>
    )
}