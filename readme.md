# **Configuração do Babel e Webpack para React**

Este guia descreve a instalação e configuração do Babel e Webpack para transpilar código moderno JavaScript e JSX, garantindo compatibilidade com navegadores.

---

## **1️⃣ Instalando o Babel**

### **Dependências de Desenvolvimento do Babel**

Instale as seguintes dependências:

```sh
yarn add @babel/core @babel/preset-env @babel/cli @babel/preset-react -D
```

📌 **Explicação das dependências:**

- **`@babel/core`** → O núcleo do Babel, responsável pela conversão do código.
- **`@babel/preset-env`** → Adapta automaticamente o código moderno para versões compatíveis com os navegadores.
- **`@babel/cli`** → Permite usar o Babel via linha de comando.
- **`@babel/preset-react`** → Adiciona suporte para JSX.

### **Criando o Arquivo de Configuração do Babel (`.babelrc`)**

Crie um arquivo `.babelrc` na raiz do projeto com o seguinte conteúdo:

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

### **Transpilação Manual com Babel**

Para converter o código JavaScript moderno para um formato compatível com navegadores mais antigos, execute:

```sh
yarn babel <caminho_do_arquivo> -d build
```

---

## **2️⃣ Configurando o Webpack**

### **Instalação das Dependências do Webpack**

Instale as dependências necessárias:

```sh
yarn add webpack webpack-cli webpack-dev-server html-webpack-plugin clean-webpack-plugin babel-loader -D
```

📌 **Explicação das dependências:**

- **`webpack`** → Empacotador de módulos que otimiza o código para produção.
- **`webpack-cli`** → Permite executar o Webpack via linha de comando.
- **`webpack-dev-server`** → Servidor de desenvolvimento com Live Reload.
- **`html-webpack-plugin`** → Gera o arquivo `index.html` automaticamente.
- **`clean-webpack-plugin`** → Limpa a pasta de build antes de gerar novos arquivos.
- **`babel-loader`** → Faz a integração entre Babel e Webpack.

### **Criando o Arquivo de Configuração do Webpack (`webpack.config.js`)**

Crie o arquivo `webpack.config.js` na raiz do projeto com o seguinte conteúdo:

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.[fullhash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, use: "babel-loader" }],
  },
  devServer: {
    static: path.resolve(__dirname, "build"),
    hot: true,
    open: true,
    historyApiFallback: true,
  },
};
```

---

## **3️⃣ Rodando o Servidor de Desenvolvimento**

Para iniciar o Webpack Dev Server e ativar o Live Reload, execute:

```sh
yarn dev
```

Ou, se necessário, rode diretamente:

```sh
yarn webpack serve
```

### **🔄 Aplicando Alterações**

Sempre que modificar os arquivos `.babelrc` ou `webpack.config.js`, reinicie o servidor para aplicar as mudanças:

```sh
yarn dev
```

---

Agora seu projeto está configurado corretamente com Babel e Webpack! 🚀

## _ React Fragment _

O React Fragment supre uma regra especifica de arquivos JSX:
A regra do Pai e Filho basicamente diz que temos que envolver atributo adjacentes em uma div.

```js
function App() {
  return (
    <div>
      <h1>Componente App</h1>
      <h2>Subtitulo</h2>
    </div>
  );
}
```

Com isso, acabamos por poluir mais o codigo, adicionando uma div e dificuldando a estilização do componente.

Para evitar isso podemos usar o React Fragment, assim:

```js
import React, { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <h1>Componente App</h1>
      <h2>Subtitulo</h2>
    </Fragment>
  );
}
```

O React Fragment é um componente fantasma, dessa forma ele retira a div e mantem apenas o h1 e o h2, separadamente.
Podemos também utilizar o Fragment via short syntax, mas isso trás a limitação de não podermos passar atributos para aquela tag.
short syntax -> <></>

## React Props

- Consiste em passar funcionalidades de um componente Pai para um componente Filho.
- Props são (readonly) usadas apenas para leitura, ou seja são constantes
- Somemente o componente <App> pode enviar props para <Post>

### Prop children

- É uma propriedade especial que permite passar elementos filhos para dentro de um componente
- Children recebe todas as propriedades colocadas passadas pelo Pai no corpo da Tag Children

## Renderizando Listas

- Por conta do nosso código suportar javascript + html, podemos renderizar arrays da seguinte forma:

```js
{
  [<h1>Elemento 1</h1>, <h1>Elemento 2</h1>];
}
```

- Objetos não sao considerados React Child ou seja, não são compativeis com o Jsx.
- Quando temos uma lista => um array de objetos, temos que converter para React Component
- Dessa forma:

```js
const posts = [
  { title: "Title#01", subtitle: "sub#01", likes: 20 },
  { title: "Title#02", subtitle: "sub#02", likes: 40 },
  { title: "Title#03", subtitle: "sub#03", likes: 60 },
];
```

```js
{
  posts.map((post) => (
    <Post
      likes={post.likes}
      post={{
        title: post.title,
        subtitle: post.subtitle,
      }}
    />
  ));
}
```

- Usamos map paras renderizar listas dentro do React
- Funcoes handle para lidar com ações do usuário.

## Use State

- Passamos o valor inicial para a variavel useState
- Sempre que atualizarmos um state no contexto: valor anterior + valor novo, devemos fazer 

## Funções de Callback via Props
- Ao usar o ``useState``, armazenamos uma lista de objetos representando os posts e fazemos a desestruturação desse estado em ``posts`` e ``setPosts``.

  - O ``setPosts`` serve para atualizar o estado e, consequentemente, renderizar a lista novamente.

  - Criamos a função handleRemovePosts, que recebe um postId como argumento e remove o post correspondente da lista.

### Passando Funções como Props
No componente ``App.js``, ao iterar sobre a lista de ``posts``, passamos para cada ``Post`` uma propriedade chamada ``onRemove``, cujo valor é a função ``handleRemovePosts``.

Além disso, passamos o objeto ``post``, garantindo que cada componente ``Post.js`` tenha acesso ao seu próprio ID e demais informações.

### Tipagem com ``PropTypes``
No componente Post.js, fazemos a tipagem das propriedades:

- onRemove é uma função obrigatória (func.isRequired).
post é um objeto com a estrutura definida via shape(), incluindo id, title e subtitle.

### Removendo um Post
- Dentro do JSX do componente ``Post``, criamos um botão de remoção que recebe a propriedade ``onClick``. Essa propriedade é atribuída a uma *função anônima* que chama ``props.onRemove``, passando o id do ``post`` atual como argumento. Dessa forma, ao clicar no botão, o post é removido da lista.