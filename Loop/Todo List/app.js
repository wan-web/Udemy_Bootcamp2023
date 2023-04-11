// let todos = [];
// while(true){
//   let menu = prompt'"메뉴를 고르세요);
//   console.log(menu);
//   if(menu === 'new') {
//     let newTodo = prompt("할 일을 작성하세요");
//     todos.push(newTodo);
//   } else if(menu === 'list') {
//     console.log("*****")
//     for(let i=0; i<todos.length; i++){
//       console.log(`${i}: ${todos[i]}`)
//     }
//     console.log("*****")
//   } else if(menu === 'quit'){
//     break;
//   }
// }
let input = prompt('what would you like to do');
const todos = ['Collect Chicekn Eggs', 'Clean Litter Box'];
while(input !== 'quit' && input !== 'q') {
  if(input === 'list') {
    console.log('*************');
    for(let i = 0 ; i < todos.length; i++){
      console.log(`${i} : ${todos[i]}`)
    }
    console.log('*************');
  } else if (input === 'new') {
    const newTodo = prompt('Ok, what is the new todo?');
    todos.push(newTodo);
    console.log(newTodo);
  } else if (input === 'delete'){
    const index = parseInt(prompt('Ok, enter an index to delete:'));
    if(!Number.isNaN(index)){
      const deleted = todos.splice(index, 1);
      console.log(`Ok, deleted ${deleted}`);
    } else {
      console.log('Unknown index');
    }
  }
  input = prompt('what would you like to do?');

}

console.log('OK QUIT THE APP!');