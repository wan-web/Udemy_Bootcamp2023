const button = document.querySelector('#change-color');
const container = document.querySelector('#container');

button.addEventListener('click', function(e){
  e.stopPropagation();
  container.style.backgroundColor = makeRandColor();
})
container.addEventListener('click', function(e){
  container.classList.toggle('hide');
})

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}