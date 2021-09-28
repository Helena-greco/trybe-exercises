//ReactDOM.render
//O ReactDOM.render é o responsável por renderizar e atualizar seu código dentro do HTML , exibindo seus elementos React .

// o reactDOM compara o elemento e seus filhos com o anterior e aplica as mudanças somente onde é necessário.
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

//Neste exemplo acima, estamos chamando a função tick que chama o ReactDOM.render a cada segundo, e injeta no elemento pai com id root um 'Hello World' e o horário.