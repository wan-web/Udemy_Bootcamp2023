const subreddits = ['cringe', 'books', 'chickens' , 'funny', 'pics', 'soccer'];

for(let i = 0 ; i < subreddits.length; i++) {
  console.log(`Visit reddit.com/r/${subreddits[i]}`)
}

for(let item of subreddits) {
  console.log(`Visit reddit.com/r/${item}`);
}

const seatingChart = [
  ['Kristen', 'Erik', 'Namita'],
  ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
  ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for( let i = 0 ; i < seatingChart.length; i++ ) {
  const row = seatingChart[i];
  for(let j = 0 ; j < row.length; j++) {
    console.log(row[j])
  }
}

for( let row of seatingChart) {
  for ( let students of row){
    console.log(students);
  }
}

for(let char of "hello world") {
  console.log(char);
}