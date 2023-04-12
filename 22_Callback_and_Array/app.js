const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

// function print(element) {
//   console.log(element);
// }

// numbers.forEach(print);
// 위와같이 forEach메서드 안에 이미 정의된 함수를 넣는것은 일반적이지 않고, 괄호 내에서 새롭게 정의를 한다!

// numbers.forEach( function(item, index){
//   if(item % 2 === 0) {
//     console.log(item, ":" ,index);
//   }
// })

// for( let item of numbers) {
//   if(item % 2 === 0){
//     console.log(item);
//   }
// }
// for of가 나중에 나옴.

const movies = [
  {
    title: 'Amadeus',
    score: 99
  },
  {
    title: 'Stand By Me',
    score: 85
  },
  {
    title: 'Parasite',
    score: 95
  },
  {
    title: 'Alien',
    score: 77
  }
]

// movies.forEach(function(movie){
//   console.log(`${movie.title} - ${movie.score}/100`)
// })

const newNumbers = numbers.map( function (num) {
  return num * 2;
})

const title = movies.map((movie)=>{
  return movie.title.toUpperCase();
})

const square = (x) => {
  return Math.pow(x,2);
}
const rollDie = () => {
  return Math.ceil(Math.random() * 6);
}

const add = (a,b) => a + b;

// const newMovies = movies.map( function(movie) {
//   return `${movie.title} - ${movie.score/10}`
// })

// const newMovies = movies.map( movie => (
//   `${movie.title} - ${movie.score/10}`
// ))

// console.log("HELLO!");
// setTimeout( () => {
//   console.log("are you still there?!")
// }, 3000)
// console.log("GOODBYE");

// const id = setInterval( ()=> {
//   console.log(Math.random())
// }, 2000)

// setTimeout( () => {
//   clearInterval(id)
// }, 10000)

const filteredNumbers = numbers.filter( n => n >= 4);

const filteredMovies = movies.filter( item => item.score >= 80);

const filteredTitle = movies
  .filter( item => item.score >= 80)
  .map( item => item.title)

const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];

console.log(exams.every( score => score >= 75))
console.log(exams.some( score => score >= 99))

const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for(let price of prices) {
//   total += price;
// }
// console.log(total);

const total = prices.reduce( (total, element) => total + element);

const minNum = prices.reduce( (min, element) => {
  if(min > element){
    return element; //이 element가 다음번 순회때 min이 된다.
  }
  return min;
})

const bestMovie = movies.reduce( (bestMovie, currMovie) => {
  if(currMovie.score > bestMovie.score){
    return currMovie // 이 currMovie가 다음 순회때 bestMovie가 된다.
  }
  return bestMovie
})

const evens = [2, 4, 6, 8];
evens.reduce( (sum, num) => sum + num , 100);

const person = {
  firstName: "Viggo ",
  lastName: "Mortensen",
  fullName: function() {
    return `${this.firstName} ${this.lastName}`
  },
  shoutName: function() {
    setTimeout(  () => {
      console.log(this);
      console.log(this.fullName());
    }, 3000)
    //화살표함수에 있는 this는 함수가 만든 범위에 상속되는 this와 같다.
  }
}