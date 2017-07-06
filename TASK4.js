var inp = require('readline');

var rl = inp.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number ', function(answer)  {
  console.log('Square of this no is:', answer*answer);
  rl.close();
});
