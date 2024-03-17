import React from 'react';
import Post from './Post';
import NewPost from './NewPost';
const Posts = (props) => {
  return (
    <div className="my-post">
        <NewPost/>
      <p className="posts-title">Posts:</p>
      <div className="posts">
        {props.posts.map(post => (
          <Post key={post.id} postTitle={post.postTitle} text={post.text} />
        ))}
      </div>
    </div>
  );
};

export default Posts;