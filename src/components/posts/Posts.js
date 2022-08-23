import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {axiosPosts} from '../../store/asyncAction/Posts'
import Users from "./users/Users";
import Photos from "./photos/Photos";
import {axiosUsers} from "../../store/asyncAction/Users";
import './styles/Posts.css'

export default function Posts() {

    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)

    useEffect(() => {
        dispatch(axiosPosts())
        dispatch(axiosUsers())
    }, []);

    return (
        <div className='field-posts'>
            <div>
                {posts.map(post => (
                    <div className='post'>
                        <div><Photos userId={post.userId}/></div>
                        <Users userId={post.userId}/>
                        <div> Title: {post.title}</div>
                        <div>{post.body} </div>
                    </div>
                ))}
            </div>
        </div>
    )
}