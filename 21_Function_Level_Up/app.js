// function collectEggs(){
//   let totalEggs = 6;
//   console.log(totalEggs);
// }

// let bird = '금강앵무';
// function birdWatch(){
//   let bird = '왜가리';
//   console.log(bird);
// }
// birdWatch();
// console.log(bird);

// let radius = 8;
// if( radius > 0 ) {
//   const PI = 3.14159;
//   let msg = 'HIII!'
// }

// console.log(radius);
// console.log(PI);
// console.log(msg);

// function bankRobbery(){
//   const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman'];
//   function cryForHelp(){
//     for(let hero of heroes) {
//       console.log(`Please help us, ${hero.toUpperCase()}`)
//     }
//   }
//   cryForHelp();
// }

// function isBetween(num) {
//   return num >= 50 && num <= 100
// }

// function isBetween2(num) {
//   return num >= 1 && num <= 10
// }

// function makeBetweenFunc(min, max) {
//   return function(num) {
//     return num >= min && num <= max;
//   }
// }

// const myMath = {
//   PI : 3.14159,
//   square(num) {
//     return num * num
//   },
//   cube: function(num) {
//     return num ** 3
//   }
// }

// const cat = {
//   name: 'Blue Steele',
//   color: 'grey',
//   breed: 'scottish fold',
//   meow(){
//     console.log("THIS IS", this);
//     console.log(`${this.breed} said "MEOW"`);
//   }
// }

// const meow2 = cat.meow;


// try {
//   hello.toUpperCase();
// } catch {
//   console.log("ERROR");
// }

// console.log("AFTER");

function yell(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3));
  } catch(err) {
    console.log("문자열을 입력하세요");
    console.log(err);
  }
}