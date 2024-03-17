const Post = (props) => {
    return(
        <div className="post">
        <h2>{props.postTitle}</h2>
        <p>{props.text}</p>
        </div>
    )
}
export default Post;
