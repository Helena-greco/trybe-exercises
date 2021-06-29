//let info = {
  //personagem: 'Margarida',
  //origem: 'Pato Donald',
  //nota: 'Namorada do personagem principal nos quadrinhos do Pato //Donald',
//};

//console.log("Bem-vinda, " + info.personagem);

//info["recorrente"] = "sim";

//console.log(info);

//for(let key in info){
  //console.log(info[key]);
//}

//let info2 = {
  //personagem: "Tio Patinhas",
  //origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
 //nota: "O Último MacPatinhas",
  //recorrente: "sim"
//}

//for(let properties in info){
  //if (
    //properties === 'recorrente' &&
    //info[properties] === 'Sim' &&
   // info2[properties] === 'Sim'
  //) {
  //  console.log('Ambos recorrentes');
 // } else {
  //  console.log(info[properties] + ' e ' + info2[properties]);
  //}
//}

/*function verificaPalindrome(word){
  for(index in word){
    if(word[index] != word[(word.length - 1) - index]){
      return false;
    }
  }
  return true;
}

console.log(verificaPalindrome('arara'));*/

/*function indiceDoMaior(numero) {
  let indiceDoMaior = 0;
  for (let indice in numero) {
    if (numero[indiceDoMaior] < numero[indice]) {
      indiceDoMaior = indice;
    }
  }
  return indiceDoMaior;
}

console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); */

/*function indiceMenor(numero) {
  let indiceMenor = 0;
  for(let indice in numero) {
    if(numero[indiceMenor] > numero[indice]) {
      indiceMenor = indice;
    }
  }
  return indiceMenor;
}

console.log(indiceMenor([2, 4, 6, 7, 10, 0, -3]));*/ 