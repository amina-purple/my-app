import React, { useState } from "react";
import Post from "./Post";

const Posts = (props) => {
    const [posts, setPosts] = useState(props.posts);
    const [text, setText] = useState('');
    const [postTitle, setTitle] = useState('');

    const addNewPost = () => {
        const newPost = {
            id: Date.now(),
            text,
            postTitle
        }
        setPosts([...posts, newPost]);
        setTitle('');
        setText('');
    }

    return (
        <div>
            <form>
                <div className="form-post">
                    <div className="form-input"> 
                        <input 
                            value={postTitle}
                            onChange={e => setTitle(e.target.value)} 
                            type="text"
                            placeholder="Название поста"
                        />
                    </div>
                    <div className="form-input">
                        <textarea 
                            value={text}
                            onChange={e => setText(e.target.value)} 
                            type="text"
                            placeholder="Описание поста" 
                            rows="4" 
                            cols="60" 
                        />
                    </div>
                    <button type="button" onClick={addNewPost}>Oтправить</button>
                </div>
            </form>
            <p className="posts-title">Posts:</p>
            <div className="posts">
                {posts.map(post => (
                    <Post key={post.id} postTitle={post.postTitle} text={post.text} />
                ))}
            </div>
        </div>
    );
}

export default Posts;
