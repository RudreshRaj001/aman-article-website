// src/components/ArticleList.js

import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleList.css';

function ArticleList({ articles }) {
  return (
    <div className="article-list">
      {articles.map(article => (
        <div key={article.id} className="article-item">
          <Link to={`/article/${article.id}`}>
            <h2>{article.title}</h2>
            <p>{article.summary}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ArticleList;
