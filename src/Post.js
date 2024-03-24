const Post = (props) => {
    return(
    
        <div className="post">
        <h2>{props.postTitle}</h2>
        <p>{props.text}</p>
        <img className="img-trash"  src="img/trash.png" alt="1"/>
        </div>
     
        
     
    )
}
export default Post;
