import { useState } from 'react';
import axios from "axios";

const PostCreate = () => {
    const [title, setTitle] = useState('')
    const onSumit = async (event) => {
        try {
            event.preventDefault();
            await axios.post('http://localhost:3001/posts', {
                title
            });
            setTitle('')
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div>
            <form onSubmit={onSumit}>
                <div className="form-group">
                    <input className="form-control" value={title} onChange={(e) => {
                        setTitle(e.target.value)
                    }} />
                </div>
                <button className="btn btn-primary"> Submit</button>
            </form>
        </div>);
}

export default PostCreate;