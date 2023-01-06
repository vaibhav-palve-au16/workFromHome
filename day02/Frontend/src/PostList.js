import React, { useEffect, useState } from "react";
import axios from 'axios';
import CommentCreate from './CommentCreate';
import ComponentsList from "./CommentsList";
const PostList = () => {
    const [posts, setPosts] = useState({})

    const fetchPost = async (event) => {
        let res = await axios.get("http://localhost:3001/posts")
        setPosts(res.data)
    }
    useEffect(() => {
        fetchPost()
    }, [])
    const renderPosts = Object.values(posts).map(post => {
        return<div className="card" style={{ width: '30%', marginBottom: '20px' }} key={posts.id}>
            <div className="card-body">
                {/* <p>{post.id}</p> */}
                <h3> {post.title}</h3>
            </div>
            <ComponentsList postId={post.id} />
            <CommentCreate postId={post.id} />
        </div>
    })
    console.log(posts);
    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {renderPosts}
            
        </div>);
}

export default PostList;