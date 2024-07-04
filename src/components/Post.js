import React from 'react';
import './Post.css';

function Post({ title, content, author }) {
  return (
    <div className="post">
      <h2 className="post-title">{title}</h2>
      <p className="post-content">{content}</p>
      <p className="post-author">Author: {author}</p>
    </div>
  );
}

export default Post;
