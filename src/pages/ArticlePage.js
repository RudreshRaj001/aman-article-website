// src/pages/ArticlePage.js

import React from "react";
import Post from '../components/Post';

function ArticlePage() {

  const posts = [
    {
        id: 1,
        title: 'Per agreement family fear strong.',
        content: 'Dinner wrong point bag watch. Politics staff recent those opportunity here. Cell data course.',
        author: 'Jackie Fowler'
    },
    {
        id: 2,
        title: 'Item capital expert range report current organization.',
        content: 'Kid himself firm sister here forget. Heavy total type. Explain crime upon nothing unit ten. Less answer time lead huge six.',
        author: 'Tracy Cherry'
    },
    {
        id: 3,
        title: 'Weight professor teach civil field throughout.',
        content: 'This support school strategy. Mean couple level already true guess edge. Mrs new our likely. Represent suggest best bank. Yeah center candidate information medical believe appear fine.',
        author: 'Larry Nelson'
    },
    {
        id: 4,
        title: 'With blue explain.',
        content: 'Will either still issue try manage war. Reflect you least accept physical lot. Response follow just pattern. Involve maybe plant career west student some. End compare structure follow serve agency far data. Which but movie choice.',
        author: 'Duane Hendricks'
    },
    {
        id: 5,
        title: 'Compare even social significant teach visit wall.',
        content: 'Suggest up money unit create everybody information suffer. Body nice news born what along. Tonight move base dream amount husband. Example approach practice moment fast sit.',
        author: 'Cindy Avila'
    },
    {
        id: 6,
        title: 'Media artist score back they instead.',
        content: 'Deep great only inside song be six. Culture both off they national eight. Stock say computer she.',
        author: 'Paul Wolfe'
    },
    {
        id: 7,
        title: 'American without consider concern.',
        content: 'Line through out often its so. Actually during product go magazine government. Size risk raise agreement.',
        author: 'Jennifer Smith'
    },
    {
        id: 8,
        title: 'Section forward point suggest sure.',
        content: 'Admit believe future Democrat there show. Policy car friend sing reality forward for. Town central visit truth campaign prepare. Method suggest go. Natural sell standard focus threat establish relationship natural.',
        author: 'Jose Adams DDS'
    },
    {
        id: 9,
        title: 'Republican paper cold may.',
        content: 'Turn increase people face his woman team pick. Wear year begin serve light community training major. Model worker maintain believe commercial strong hospital. Key imagine nor practice house similar time agreement. Issue himself inside source foot task phone.',
        author: 'John Alexander'
    },
    {
        id: 10,
        title: 'Good bring bring at conference.',
        content: 'Down billion strategy control. Compare difficult wind. Picture deep run start nice realize company. Then either practice through.',
        author: 'Victoria Holland'
    }
];

  return (
    // <div className="homepage">
    //   <h1>Latest Articles</h1>
    //   <div className="posts">
    //     {posts.map((post) => (
    //       <Post
    //         key={post.id}
    //         title={post.title}
    //         content={post.content}
    //         author={post.author}
    //       />
    //     ))}
    //   </div>
    // </div>
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

export default ArticlePage;
