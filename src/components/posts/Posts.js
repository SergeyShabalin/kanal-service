import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {axiosPosts} from '../../store/asyncAction/Posts'
import Users from "./users/Users";
import Photos from "./photos/Photos";
import './styles/Posts.css'
import {axiosUsers} from "../../store/asyncAction/Users";


export default function Posts() {

    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)

    useEffect(() => {
        dispatch(axiosPosts())

    }, []);

    return (
        <div className='field-posts'>
            <button onClick={() => dispatch(axiosPosts())}>ggg</button>
            <div>
                {posts.map(post => (

                    <div className='post'>
                        {/*<div><Photos userId={post.userId}/></div>*/}
                        <div><Users userId={post.userId}/></div>
                        <div> Title: {post.title}</div>
                        <div>{post.body} </div>
                    </div>
                ))}</div>
        </div>
    )
}