import { React, useState } from "react";


function NewPost(props) {
     
    let data = props.data.posts
    const [posts, setPosts] = useState(data)
    const [text, setText] = useState('')
    const [postTitle, setTitle] = useState('')
  
    const addNewPost = () => {
      const newPost = {
        id: Date.now(),
        text,
        postTitle
      }
      setPosts([...posts, newPost])
      setText('')
      setTitle('')
    }

 
    
 
    return (
        <div className="new-post">
            <p className="new-post-add">New post:</p>
            <textarea value={text} 
                onChange={e => setText(e.target.value)}
                type="text"
                placeholder="Описание поста" rows={4} cols={60}/>
            <input value={postTitle}
                 type="text" 
                 onChange={e => setTitle(e.target.value)} 
                 placeholder="Название поста" 
                 />
               
                 
            <button type="button" onClick={addNewPost} className="send">Send</button>
        </div>
    );
}
export default NewPost;