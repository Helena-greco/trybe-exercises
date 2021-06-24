let numbers = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}

for(let numberIndex = 0; numberIndex < numbers.length; numberIndex += 1) {
  console.log(numbers[numberIndex] / 2);
}
