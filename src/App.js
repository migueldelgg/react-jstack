// Functional Component
import React, { Fragment } from "react";

import Header from "./Header.js";
import Post from './Post.js'

const posts = [
  { title: "Title#01", subtitle: "sub#01", likes: 20 },
  { title: "Title#02", subtitle: "sub#02", likes: 40 },
  { title: "Title#03", subtitle: "sub#03", likes: 60 },
]

// Props -> Propriedades
function App() {
  return (
    <>
      <Header title={"Miguel Blog"}>
        <h2>Bem-vindo</h2>
      </Header>
      <hr />

      {posts.map(post => (
        <Post
          key={post.title} // deve ser unica
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle,
          }}
        />
      ))}
    </>
  )
}

export default App;