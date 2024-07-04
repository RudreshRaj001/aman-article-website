// src/pages/HomePage.js

import React, { useState, useEffect } from 'react';
import ArticleList from '../components/ArticleList';

function HomePage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('/api/articles')
      .then(response => response.json())
      .then(data => setArticles(data));
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      <ArticleList articles={articles} />
    </div>
  );
}

export default HomePage;
