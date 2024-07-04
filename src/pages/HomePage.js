// // src/pages/HomePage.js

// import React, { useState, useEffect } from 'react';
// import ArticleList from '../components/ArticleList';

// function HomePage() {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     fetch('/api/articles')
//       .then(response => response.json())
//       .then(data => setArticles(data));
//   }, []);

//   return (
//     <div style={{backgroundColor: "red", height: "100vh"}}>
//       <h1>Articles</h1>
//       <ArticleList articles={articles} />
//     </div>
//   );
// }

// export default HomePage;

import React from 'react';
import Post from '../components/Post';
// import { posts } from '../conponents/ExamplePost'; // Adjust path based on your project structure

function HomePage() {
  const posts = [
    {
      id: 1,
      title: 'Introduction to React Hooks',
      content:
        'Learn about useState and useEffect hooks in React. Hooks are a new addition in React 16.8 that lets you use state and other React features without writing a class.',
      author: 'John Doe'
    },
    {
      id: 2,
      title: 'Building Responsive Web Design',
      content:
        'Tips and tricks to create responsive web layouts. Responsive web design (RWD) is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes.',
      author: 'Jane Smith'
    },
    // Add more posts as needed
  ];

  
  return (
    <div className="homepage" style={{display: "flex", justifyContent: "center"}}>
      <div className='Container' style={{width: "90vw", marginBottom: "100px"}}>
        <h1>Latest Articles</h1>
        <div className="posts">
          {posts.map(post => (
            <Post
            key={post.id}
            title={post.title}
            content={post.content}
            author={post.author}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
