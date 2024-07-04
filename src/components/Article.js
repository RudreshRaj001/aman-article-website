// src/components/Article.js
import React from 'react';

const Article = ({ article }) => (
  <div className="article">
    <h2>{article.title}</h2>
    <p>{article.content}</p>
  </div>
);

export default Article;
