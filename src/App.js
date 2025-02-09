// Functional Component
import React, { Fragment, useState } from "react";

import Header from "./Header.js";
import Post from './Post.js'

// Props -> Propriedades
function App() {

  const [posts, setPosts] = useState([
    { id: Math.random(), title: "Title#01", subtitle: "sub#01", likes: 20 },
    { id: Math.random(), title: "Title#02", subtitle: "sub#02", likes: 40 },
    { id: Math.random(), title: "Title#03", subtitle: "sub#03", likes: 60 },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title#0${prevState.length + 1}`,
        subtitle: `sub#0${prevState.length + 1}`,
        likes: 60 + prevState.length
      }
    ])
  }

  function handleRemovePosts(postIdToRemove) {
    setPosts((prevState) => (
      prevState.filter(post => post.id !== postIdToRemove)
    ))
  }

  return (
    <>
      <Header title={"Miguel Blog"}>
        <h2>
          Bem-vindo
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>
      <hr />

      {posts.map(post => (
        <Post
          key={post.id} // deve ser unica
          likes={post.likes}
          onRemove={handleRemovePosts}
          post={{
            id: post.id,
            title: post.title,
            subtitle: post.subtitle,
          }}
        />
      ))}
    </>
  )
}

export default App;