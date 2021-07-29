// Exercício 1
const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { fullName, email: `${email}@trybe.com` };
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees(employeeGenerator));

// Exercício 2
const checkNumbers = (numApostado, numSorteado) => numApostado === numSorteado;

const randomNumber = (numApostado, callback) => {
  const numSorteado = Math.floor((Math.random() * 6) + 1);
  return callback(numApostado, numSorteado) ? "Parabéns você ganhou" : "Tente novamente";
}

console.log(randomNumber(5, checkNumbers));

//Exercício 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (gabarito, students) => {

}
