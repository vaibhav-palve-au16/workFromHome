import React, { useEffect, useState } from "react";
import axios from 'axios';

const ComponentsList = ({ postId }) => {
    const [Components, setComponents] = useState({})
    const fetchData = async () => {
        try {
            let res = await axios.get(`http://localhost:4001/posts/${postId}/comments`)
            setComponents(res.data)
        } catch (error) {
            console.log(error);
        }
    }
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

export default ComponentsList