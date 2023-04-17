/* 
XHR
const req = new XMLHttpRequest();

req.onload = function() {
  console.log('IT LOADED!!');
  const data = JSON.parse(this.responseText);
  console.log(data.name);
}

req.onerror = function() {
  console.log("ERRORR");
  console.log(this);
}

req.open("GET", "https://swapi.dev/api/people/1");
req.send(); 
*/

// "https://swapi.dev/api/people/1"

//FETCH

/* 
fetch("https://swapi.dev/api/people/1")
  .then( res => {
    console.log('resolved!', res);
    return res.json();
  })
  .then( data => {
    console.log(data);
  })
  .catch( (e) => {
    console.log('error!', e);
  }) */

/* 
fetch("https://swapi.dev/api/people/1")
  .then( res => {
    console.log('resolved!', res);
    return res.json();
  })
  .then( data => {
    console.log(data);
    return fetch("https://swapi.dev/api/people/2")
  })
  .then( res => {
    console.log("SECOND REQUEST");
    return res.json();
  })
  .then( data => {
    console.log(data);
  })
  .catch( (e) => {
    console.log('error!', e);
  })
 */

const loadStarWarsPeople = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/people/1");
    const data = await res.json();//fetch로 응답을 받으면 json()을 써서 데이터를 뽑아내야한다.
    console.log(data);
    const res2 = await fetch("https://swapi.dev/api/people/2");
    const data2 = await res2.json();
    console.log(data2);
  } catch(e) {
    console.log(e);
  }
}

// loadStarWarsPeople();

axios.get("https://swapi.dev/api/people/1")
  .then( res => {
    console.log("response: ", res);//axios를 써서 응답을 받으면 바로 데이터가 온다.
  })
  .catch( e => {
    console.log("ERROR!" , e);
  })

//비동기 함수로 리팩토링하기 (async await);
const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}`);
    console.log(res.data);
  } catch(e) {
    console.log("ERRORRRR!!" ,e );
  }
}

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const getDadJoke = async () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }
  const res = await axios.get("https://icanhazdadjoke.com", config);
  return res.data.joke;
}

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  const newLi = document.createElement('LI');
  newLi.append(jokeText);
  jokes.append(newLi);
}

button.addEventListener('click', addNewJoke);
