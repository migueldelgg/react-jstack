// Functional Component
import React, { Fragment } from "react";
import Post from './Post.js'

// Props -> Propriedades
function App() {
  return (
    <>
      <h1>Miguel Newslatter</h1>
      <h2>Posts da semana</h2>
      <hr />
      <Post
        post={{
          title: "Titulo da noticia 1",
          subtitle: "Subtitulo da notifica 1"
        }}
      />
    </>
  )
}

export default App;