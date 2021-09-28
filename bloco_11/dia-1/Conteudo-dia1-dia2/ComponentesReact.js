/** componentes React são funções ou classes JavaScript que podem aceitar parâmetros, chamados de props (do inglês properties ), e retornam elementos React responsáveis por determinarem o que será renderizado na tela.
*/

// Via função JavaScript:
function Greeting(props) {
  return (<h1>Hello, {props.name}</h1>);
}

export default Greeting;

// Via classe :
import React from 'react';

class Greeting extends React.Component {
  render() {
    return (<h1>Hello, {this.props.name}</h1>);
  }
}

export default Greeting;

/** Analisando o código acima, temos:
- A declaração de um componente chamado Greeting .
- O componente Greeting herda da classe Component da biblioteca react .
- O componente Greeting descreve o que vai ser mostrado para quem usar a aplicação , declarado no método obrigatório render . Nesse caso, Greeting retorna: <h1>Hello, {this.props.name}</h1> .
- O componente Greeting possui como propriedade um objeto chamado props , que contém todos os dados passados como parâmetro na hora de chamar um componente. Ou seja, chamar <Greeting name="Samuel" /> faz com que o componente tenha uma prop igual a { name: "Samuel" } .
- Exportamos o componente Greeting de forma que ele possa ser reutilizado na aplicação.
*/

// PROPS - passa o valor para os componentes

function greeting(name, lastName){
  return `Hello, ${name} ${lastName}`;
}
console.log(greeting('Samuel', 'Silva'));


// Esse objeto props , por sua vez, é passado para o componente Greeting , o qual poderá resgatar tanto o nome como o sobrenome através do this.props.name e this.props.lastName 
import React from 'react';
const props = { name: 'Samuel', lastName: 'Silva' } 

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name} {this.props.lastName}</h1>;
  }
}

export default Greeting;

// Agora o chamamos dentro do componente App :
import Greeting from './Greeting';

function App() {
  return (
    <main>
      <Greeting name="Samuel" lastName="Silva" />
    </main>
  );
}

export default App;