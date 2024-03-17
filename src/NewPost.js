import { React, useRef } from "react";


function NewPost(props) {

    let addtext = useRef(null)
    let addtitle = useRef(null)

    const addNewPost = () => {
    
        let text = addtext.current.value
        alert(text)
        let title = addtitle.current.value
        alert(title)  
    }


    return (
        <div className="new-post">
            <p className="new-post-add">New post:</p>
            <textarea ref={addtext}></textarea>
            <input type="text" ref={addtitle} />
            <button type="button" onClick={addNewPost} className="send">Send</button>
        </div>
    );
}
export default NewPost;
