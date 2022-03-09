import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const { data } = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
    console.log("Res", data);
    if (data) {
      setComments(data);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  console.log('Coments:', comments);

  const renderComments = comments.map(comment => {
    return (
      <div>
        Comment
        {comment.content}
      </div>
    )
  });


  return (
    <div>
      <h3>Comments for post {postId}</h3>
      {renderComments}
    </div>
  );
};

export default CommentList;