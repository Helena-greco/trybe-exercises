const box = document.getElementById('counterBox');
const paragraph = document.createElement('p');
box.appendChild(paragraph);
const button = document.getElementById('clickcounter');
let clickCount = 0;

button.addEventListener('click', () => paragraph.innerHTML = clickCount += 1);
