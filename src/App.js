// Functional Component
import React, { Fragment } from "react";

import Header from "./Header.js";
import Post from './Post.js'

// Props -> Propriedades
function App() {
  return (
    <>
      <Header title={"Miguel Blog"}>
      </Header>
      <hr />
      <Post
        likes={20}
        post={{
          title: "Titulo da noticia 1",
          subtitle: "Subtitulo da notifica 1"
        }}
      />
    </>
  )
}

export default App;