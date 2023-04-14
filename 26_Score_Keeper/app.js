
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

const p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1Display'),
}

const p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#p2Display'),
}

let winningScore = 5;
let isGameOver = false;

function updateScores(player, opponent) {
  if(!isGameOver){
    player.score += 1;
    if(player.score === winningScore){
      isGameOver = true;
      player.display.classList.add('winner');
      opponent.display.classList.add('loser');
      for(let p of [player, opponent]) {
        p.button.style.opacity = '0.5';
        p.button.disabled = true;
      }
    }
    player.display.innerText = player.score;
  }
}

p1.button.addEventListener('click', function(){
  updateScores(p1, p2);
})

p2.button.addEventListener('click', function(){
  updateScores(p2, p1)
})

winningScoreSelect.addEventListener('change', function(){
  winningScore = parseInt(this.value);
  reset();
})

resetButton.addEventListener('click', reset)

function reset() {
  isGameOver = false;
  for(let p of [p1, p2]){
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('winner', 'loser');
    p.button.disabled = false;
    p.button.style.opacity = '1';
  }
}