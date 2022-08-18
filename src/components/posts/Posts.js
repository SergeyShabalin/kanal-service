import React, {useEffect, useState} from 'react'
import {Api} from "../Api";
import Users from "./users/Users";
import Photos from "./photos/Photos";
import './styles/Posts.css'

export default function Posts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        viewPosts()
    }, []);

    function viewPosts() {
        Api.get('/Posts').then((resp) => {
            setPosts(resp.data)
            console.log(resp.data)
        }).catch((error) => {
            console.warn(error, 'server error');
        })
    }

        const post = posts.map(item => {
            return (<div key={item.id} className='post'>
                    <Photos userId={item.userId}/>
                    <Users userId={item.userId}/>
                    <div>Title: {item.title} </div>
                    <div>{item.body} </div>
                </div>
            )
        })

    return (
        <div className='field-posts'>
            {post}
        </div>
    )
}