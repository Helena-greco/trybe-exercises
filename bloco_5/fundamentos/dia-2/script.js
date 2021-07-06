// // 1. Acesse o elemento elementoOndeVoceEsta .

// const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// // 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

// const pai = document.querySelector("#elementoOndeVoceEsta").parentElement;
// pai.style.color = 'blue';

// // 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

// const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
// primeiroFilhoDoFilho.innerText = 'Não deixe para depois o que você pode estudar hoje';

// // 4. Acesse o primeiroFilho a partir de pai .

// const primeiroFilho = pai.firstElementChild;

// // 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .

// const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

// // 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .

// const textElement = elementoOndeVoceEsta.nextSibling;

// // 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .

// const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

// // 8. Agora acesse o terceiroFilho a partir de pai .

// const terceiroFilho2 = pai.lastElementChild.previousElementSibling;

// 9. Crie um irmão para elementoOndeVoceEsta .

const pai = document.getElementById('pai');
const irmaoElementoOndeVoceEsta = document.createElement('div');
irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmaoElementoOndeVoceEsta);

// 10. Crie um filho para elementoOndeVoceEsta .

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const filhoElementoOndeVoceEsta = document.createElement('div');
filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

// 11. Crie um filho para primeiroFilhoDoFilho .

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho')
const filhoPrimeiroFilhoDoFilho = document.createElement('div');
filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);


// 12. A partir desse filho criado, acesse terceiroFilho .

const terceiroFilho = filhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;

// 13. Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .

let filhos = document.querySelectorAll('div');
for (let index = 0; index < filhos.length; index += 1) {
let element = element[index];
  if (element.id !== "#pai" || element.id !== "#elementoOndeVoceEsta" || element.id !== "#primeiroFilhoDoFilho") {
    element.remove();
  }
  console.log(element)
}
