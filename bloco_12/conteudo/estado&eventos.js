// Um estado representa um momento de um componente dinâmico. Se o seu componente é um relógio, o estado atual dele é a hora atual.
// O Estado de um componente é um lugar especial que todo componente tem para armazenar informações que devem persistir enquanto a tela não for fechada ou atualizada.
// Eventos são como os eventListeners estudados anteriormentes: você os associa aos elementos que exibirá na tela e eles nortearão como cada componente reage a uma ação de quem usa.

import React from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */
function handleClick() {
  console.log('Clicou no botão!')
}

class App extends React.Component {
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  render() {
    return <button onClick={handleClick}>Meu botão</button>
  }
}

export default App;