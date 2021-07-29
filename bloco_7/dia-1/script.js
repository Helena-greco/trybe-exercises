// Modifique a estrutura da função para que ela seja uma arrow function .

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope}' ótimo, fui utilizada no escopo !'`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
    }
}

testingScope(false);

// Modifique as concatenações para template literals .

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}

const sortedArray = sortOddsAndEvens();
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);

console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente !`);

// Crie uma função que receba um número e retorne seu fatorial.

const fatorial = number => {
  let resultado = 1;
  for (let index = 2; index <= number; index += 1) {
      resultado *= index;
  }
  return resultado;
}

console.log(fatorial(8));

// tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

const factorial = number => number > 1 /* condição */? number * factorial(number - 1) /* se for true a condição retorna esse cálculo */ : 1; /* se for false, retorna esse valor */
console.log(factorial(5));

// Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = text => {
  let wordArray = text.split(' ');
  let maxLength = 0;
  let result = '';
  for (const word of wordArray) {
      if (word.length > maxLength) {
          maxLength = word.length;
          result = word;
      }
  }
  return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));
