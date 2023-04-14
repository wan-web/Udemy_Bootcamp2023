// const btn = document.querySelector('#v2');

// btn.onclick = function(){
//   console.log('YOU CLICKED ME!');
//   console.log('I HOPE IT WORKED!!');
// }

// function scream(){
//   console.log('AAAAAHHHH');
//   console.log('STOP TOUCHING ME!');
// }

// btn.onmouseenter = scream;

// document.querySelector('h1').onclick = () => {
//    alert('you clicked the h1!');
// }

// const btn3 = document.querySelector('#v3');

// btn3.addEventListener('mouseup', scream)

const btn = document.querySelector('#color-btn');
const h1 = document.querySelector('h1');

let bgColor = [];
btn.addEventListener('click', () => {
  for(let i = 0 ; i < 3 ; i++) {
    bgColor[i] = Math.floor(Math.random() * 256);
  }
  h1.innerText = `rgb(${bgColor[0]}, ${bgColor[1]}, ${bgColor[2]})`
  document.body.style.backgroundColor = h1.innerText;
  if(bgColor[0] + bgColor[1] + bgColor[2] < 200) {
    h1.style.color = 'white';
  }
})

const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button');

for(let button of buttons) {
  button.addEventListener('click', colorize)
}

const h2s = document.querySelectorAll('h2');
for(let h2 of h2s) {
  h2.addEventListener('click', colorize)
}

function colorize() {
  console.log(this);
  this.style.backgroundColor = makeRandomColor();
  this.style.color = makeRandomColor();
}