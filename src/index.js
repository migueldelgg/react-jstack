// toda vez que escrevemos codigo JSX o editor de codigo identifica
// para escrever JSX temos que importar o React
import React from 'react';
import ReactDOM from 'react-dom';

// renderize o h1 dentro da DIV com id igual a root
ReactDOM.render(
  <h1 id='title'>
    <span>Hello World!</span>
  </h1>,
  document.getElementById('root')
);