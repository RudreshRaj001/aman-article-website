// src/pages/ArticlePage.js

import React, { useState, useEffect } from 'react';

function ArticlePage({ match }) {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`/api/articles/${match.params.id}`)
      .then(response => response.json())
      .then(data => setArticle(data));
  }, [match.params.id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
}

export default ArticlePage;
