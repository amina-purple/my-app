

const Post = (props) => {

    
    return(
    
        <div className="post">
        <h2>{props.postTitle}</h2>
        <p>{props.text}</p>
        <button className="button-img" type="button"  onClick={() => props.deletePost(props.id)}>
             <img className="img-trash"  src="img/trash.png" alt="1"/>
        </button>
      
        </div>
     
        
     
    )
}
export default Post;
