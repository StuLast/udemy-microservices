import React from 'react';

import PostCreate from './components/posts/PostCreate';
import PostList from './components/posts/PostList';

const App = () => {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h1>Post List</h1>
      <PostList />
    </div>
  );
}

export default App;