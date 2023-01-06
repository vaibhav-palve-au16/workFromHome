import React, { useEffect, useState } from "react";
import axios from 'axios';

export default ({ postId }) => {
    const [Components, setComponents] = useState({})
    const fetchData = async (event) => {
        try {
            let res = await axios.get(`http://localhost:8080/posts/${postId}/comments`)
            setComponents(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    console.log(Components);
    useEffect(() => {
        fetchData()
    }, [])
    const renderComments = Object.values(Components).map((comment)=>{
        return <li key={comment.id}>{comment.content}</li>
    })
    return <ul>
        {renderComments}
    </ul>
}
