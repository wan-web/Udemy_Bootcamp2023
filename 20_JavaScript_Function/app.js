singSong("a");

function singSong(){
  console.log("DO");
  console.log("RE");
  console.log("MI");
  console.log(arguments);
}

function add(x,y){
  console.log(0);
  if(typeof x !== 'number' || typeof y !== 'number'){
    console.log(1);
    return false;
  }
  console.log(2);
  return x + y;
}
