// const subreddits = ['cringe', 'books', 'chickens' , 'funny', 'pics', 'soccer'];

// for(let i = 0 ; i < subreddits.length; i++) {
//   console.log(`Visit reddit.com/r/${subreddits[i]}`)
// }

// for(let item of subreddits) {
//   console.log(`Visit reddit.com/r/${item}`);
// }

// const seatingChart = [
//   ['Kristen', 'Erik', 'Namita'],
//   ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//   ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for( let i = 0 ; i < seatingChart.length; i++ ) {
//   const row = seatingChart[i];
//   for(let j = 0 ; j < row.length; j++) {
//     console.log(row[j])
//   }
// }

// for( let row of seatingChart) {
//   for ( let students of row){
//     console.log(students);
//   }
// }

// for(let char of "hello world") {
//   console.log(char);
// }

const testScores = {
  keenan: 80,
  damon: 67,
  kim: 89,
  shawn: 91,
  marlon: 72,
  dwayne: 77,
  nadia: 83,
  elvira: 97,
  diedre: 81,
  vonnie: 60
}

// for(let person in testScores) {
//   console.log(person, testScores[person]);
// }

let total = 0;
let scores = Object.values(testScores)
for(let score of scores) {
  total = total + score;
}
console.log(total / scores.length);