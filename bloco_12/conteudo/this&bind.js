// Para acessar uma função que criamos dentro de uma classe num eventListener precisamos explicitar a origem de nossa função com a sintaxe this.minhaFuncao .

import React from 'react';
import './App.css';

class App extends React.Component {
  handleClick() {
    console.log('Clicou!')
  }

  render() {
    /* No React, precisamos dizer explicitamente que queremos uma função da nossa classe
    através da sintaxe `this.minhaFuncao` para usá-la num evento */
    return <button type="button" onClick={this.handleClick}>Meu botão</button>;
  }
}

export default App;

// Constructor
// Toda classe em JavaScript tem acesso a um método chamado constructor() , e com as classes de React, definidas com class MinhaClasse extends React.Component , não é diferente! Quando um componente React é criado, ou seja, quando é colocado na tela do navegador, a primeira coisa que é executada é a função constructor() . Toda a lógica interna que o React adiciona aos seus componentes começa a ser inclusa neles nesse momento.

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    // A função `super()` é chamada para garantir que a lógica interna do React rode **antes** da sua. Se não for assim, o código não funcionará
    super()

    // Sua lógica extra vai aqui! O parâmetro `props` é opcional, para você acessar as props diretamente no construtor
  }

  render() {
    return <span>Meu componente!</span>
  }
}

export default App;

// O this acessa, nos componentes React, um objeto que guarda tudo que importa àquele componente . Um código de Hello, World! em React, ilustrado abaixo, gera a impressão no console a seguir:

import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    console.log(this) // imprime um objetão da linha 55
    return <span>Hello, world!</span>
  }
}

export default App;

// App {
//   context: {}
//   props: {}
//   refs: {}
//   state: null
//   updater: { isMounted: ƒ, enqueueSetState: ƒ, enqueueReplaceState: ƒ, enqueueForceUpdate: ƒ }
//   _reactInternalFiber: FiberNode { tag: 1, key: null, stateNode: App, elementType: ƒ, type: ƒ, …}
//   _reactInternalInstance: {_processChildContext: ƒ}
//   isMounted: (...)
//   replaceState: (...)
//   __proto__: Component
//     constructor: class App
//     isMounted: (...)
//     render: ƒ render()
//     replaceState: (...)
//     __proto__: {...}
//   // ... Continua
//   }

// Como se pode ver, o this , dentro das classes de componentes React , é um objeto enorme que contém, basicamente, tudo que concerne aquele componente dentro da aplicação. Quando fazemos this.props , estamos acessando a chave props dentro do objeto this , que irá conter as propriedades ( props vem de propriedades !) passadas àquele componente. 

import React from 'react';
import './App.css';

class App extends React.Component {
  handleClick() {
    // Essa chamada ao `this` retorna `undefined`? !
    console.log(this)
    console.log('Clicou')
  }

  render() {
    // Já essa chamada ao `this`, feita de dentro da função `render`, retorna o objeto que esperamos
    console.log(this)
    return <button onClick={this.handleClick}>Meu botão</button>
  }
}

export default App;

// o this retornando o obj:

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
    Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
    e tudo o mais daqui de dentro */
    console.log(this)
    console.log('Clicou!')
  }

  render() {
    return <button onClick={this.handleClick}>Meu botão</button>
  }
}

export default App;
