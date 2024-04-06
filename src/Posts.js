import React, { useState, useEffect } from "react";
import Post from "./Post";
import axios from 'axios';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [text, setText] = useState('');
    const [postTitle, setTitle] = useState('');

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/articles');
            
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const addNewPost = async () => {
        try {
            const newPost = {
                title: postTitle,
                text,
            };
            await axios.post('http://localhost:8000/api/article/create', newPost);
            setTitle('');
            setText('');
            fetchPosts();
        } catch (error) {
            console.error('Error adding new post:', error);
        }
    };

    const deletePost = async (id) => {
        try {
            await axios.post(`http://localhost:8000/api/article/delete/${id}`);
            setPosts(prevPosts => prevPosts.filter(post => post._id !== id));
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    return (
        <div>
            <form>
                <div className="form-post">
                    <p className="new-post-add">New post:</p>
                    <div className="form-input"> 
                        <input 
                            value={postTitle}
                            onChange={e => setTitle(e.target.value)} 
                            type="text"
                            placeholder="Post Title"
                        />
                    </div>
                    <div className="form-input">
                        <textarea 
                            className="input-textarea"
                            value={text}
                            onChange={e => setText(e.target.value)} 
                            type="text"
                            placeholder="Post Description" 
                            rows="4" 
                            cols="60" 
                        />
                    </div>
                    <button type="button" onClick={addNewPost}>Send</button>
                </div>
            </form>
            <p className="posts-title">Posts:</p>
            <div className="posts">
                {posts.map(post => (
                    <Post key={post._id} postTitle={post.title} text={post.text} deletePost={() => deletePost(post._id)} />
                ))}
            </div>
        </div>
    );
};

export default Posts;