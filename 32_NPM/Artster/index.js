const figlet = require('figlet');
const colors = require('colors');

figlet('Hello World!!', function(err, data) {
  if(err) {
    console.log('Something wnet wrong...');
    console.dir(err);
    return ;
  }
  console.log(data.green);
})