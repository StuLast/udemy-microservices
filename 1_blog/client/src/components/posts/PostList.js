import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CommentCreate from '../comments/CommentCreate';
import CommentList from '../comments/CommentList';

const PostList = () => {
  const [posts, setPosts] = useState({});

  const getPosts = async () => {
    const { data } = await axios.get('http://localhost:4000/posts');
    if (data) {
      setPosts(data);
    }
  };

  useEffect(() => {
    getPosts();
  }, [])

  const renderedPosts = Object.values(posts).reverse().map(post => {
    return (
      <div
        className="card"
        style={{ width: '30%', marginBottom: '20px' }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentCreate postId={post.id} />
          <hr />
          <CommentList postId={post.id} />
        </div>
      </div>
    )
  })


  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {!posts && <p>No posts to show</p>}
      {posts && renderedPosts}
    </div>
  )
}

export default PostList;