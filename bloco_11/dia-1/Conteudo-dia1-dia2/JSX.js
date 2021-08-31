/** React Front-end
 * npm init -y : abre o package.json
 * npm install --save-dev jest : para instalar o jest
 * npm i react : instalar o react
 * .gitignore : dentro da pasta, escrever node_modules/ para não fazer o commit dessa pasta
 * npm -> instala o pacote no projeto
 * npx -> executa o pacote
 * npx create-react-app my_app -> cria a pasta my_app com o app do react e o script pronto.
 *
 * o React é, atualmente, uma das principais bibliotecas Javascript para construção de interfaces de usuário.
 * 
 * O JSX , ou Javascript Syntax Extension é uma extensão de sintaxe para Javascript.
 * 
 * para add no repositório git: git remote add <nomedoarquivo>
 * 
 * A construção de um elemento JSX é bem parecida com um elemento HTML, com pequenas diferenças. A declaração de uma class no HTML, que é substituída por className no JSX.
 * const element = <h1>Hello, world!</h1>;
 * 
 * Para criar um elemento: const element = React.createElement("h1", null, "Hello, world")
 */

// para incorporar expressões no JSX
 const nome = 'Jorge Maravilha';
 const element = <h1>Hello, {nome}</h1>;

// chamando uma função no element
function nomeCompleto (nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

const element = <h1>Hello, {nomeCompleto("Jorge", "Maravilha")}</h1>;

// incorporar a nossa constante element na função helloWorld , retornar um código JSX e encapsulá-la em uma div
function helloWorld (nome, sobrenome) {
  return <h1>Hello, {`${nome} ${sobrenome}`}</h1>;
}


const container = <div>{element}</div>;

// substituição de class por className em JSX? Podemos também utilizar expressões Javascript para atribuir valor à este atributo.
const nome = 'Jorge Maravilha';
const classe = 'hello-class';
const element = <h1 className={classe}>Hello, {nome}</h1>;
