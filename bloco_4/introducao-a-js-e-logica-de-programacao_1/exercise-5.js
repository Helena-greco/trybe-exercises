
let anguloA = 65;
let anguloB = 100;
let anguloC = 15;

let sumDosAngulos = anguloA + anguloB + anguloC;

let angulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if(angulosPositivos){
  if (sumDosAngulos === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}