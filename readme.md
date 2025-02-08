### Instalando o Babel - Dependências de Desenvolvimento
- @babel/core é o Core do Babel, contém as principais funcionalidades do Babel
- @babel/preset-env Vai entender quais recursos que estamos usando no projeto que são modernos e que não estão presentes em versões do Javascript que os navegadores utilizam
- @babel/cli linha de comando do babel
- @babel/preset-react para o babel entender codigo JSX

- criar arquivo de configuração do babel - .babelrc (json com comentários)
- adicionar o código: 
```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

- para realizar trasnpilação de javascript moderno para javascript "antigo", usamos o seguinte comando:
- yarn babel _caminho_ -d build

---

- Para configurar o webpack adicionamos as seguintes dev dependencies:
- webpack 
- webpack-cli

- e fazemos a criacao do arquivo de configuracao do webpack, webpack.config.js
