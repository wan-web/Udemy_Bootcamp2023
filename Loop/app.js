// let maximum = parseInt(prompt("Enter the maximum number!"))

// while(!maximum){
//   maximum = parseInt(prompt("Enter a valid number!"))
// }

// const targetNum = Math.ceil(Math.random() * maximum)
// console.log(targetNum)

// let guess = parseInt(prompt("enter your first guess!"))
// let attempts = 1;

// while(parseInt(guess) !== targetNum) {
//   if(guess === 'q') break;
//   attempts++;
//   if(guess > targetNum) {
//     guess = prompt("Too high! Enter a new guess:")
//   } else {
//     guess = prompt("Too low! Enter a new guess:")
//   }
// }
// if(guess === 'q') {
//   console.log("OK, YOU QUIT!")
// } else {
//   console.log("CONGRATS YOU WIN")
// }
// console.log(`You Got it! It took you ${attempts} guesses`)

let 최대숫자 = prompt("최대숫자를 입력하세요!");
console.log(typeof 최대숫자) //prompt를 통해 들어온 값은 문자열이다.
//난수 생성
let 난수 =Math.ceil( Math.random() * 최대숫자) // 자동으로 number로 형변환이 되었다.
console.log(난수);

let 추측값 = parseInt(prompt("숫자를 추측해보세요"));
let attempts = 1;

while(parseInt(추측값) !== 난수) {
  if( 추측값 === 'q') break;
  attempts++;
  if(추측값 > 난수) {
    추측값 = prompt("더 낮은 값을 입력하세요!")
  } else {
    추측값 = prompt("더 높은 값을 입력하세요")
  }
}
if( 추측값 === 'q'){
  console.log('게임을 종료하셨습니다');
} else {
  console.log("성공하셨습니다. 시도횟수는 " + attempts + "회 입니다.")
}
