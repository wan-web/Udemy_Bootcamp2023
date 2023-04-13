//최신방식
function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}


//옛날방식
function rollDie2(numSides) {
  if(numSides === undefined) {
    numSides = 6;
  }
  return Math.floor(Math.random() * numSides) + 1;
}

//매개변수가 여러개면 default값이 없는 매개변수를 앞에 둬야된다. 순서가 중요!
function greet( msg = "Hey there", person) {
  console.log(`${msg}, ${person}`)
}

function greet2( person, msg="Hey there"){
  console.log(`${msg}, ${person}`)
}

const dogs = ["Rusty", "Wyatt", "Blue"]
const cats = ["Scout", "Rocket"]

const feline = {legs:4, family: "Felidae"};
const canine = {isFurry: true, family: "Caninae"};

// function sum(){
//   return arguments.reduce( (total, element) => total + element);
// }

function sum(...nums){
  console.log(nums);
  return nums.reduce( (total, element) => total + element);
}


function raceResults(gold, silver, ...everyoneElse){
  console.log(`GOLD MEDAL GOES TO: ${gold}`)
  console.log(`SILVER MEDAL GOES TO: ${silver}`)
  console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
}

const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

const highScore = scores[0];
const secondHighScore = scores[1];

const [gold, silver, bronze, ...everyoneElse] = scores;

const user = {
  firstName: 'taewan',
  born: 1988,
  lastName: 'kim',
  city: 'seoul',
  died: 'AA',
}

const {born : bornYear} = user;

const {lastName, city, died="N/A" } =  user;

function fullName({firstName, lastName}){
  return `${firstName} ${lastName}`;
}