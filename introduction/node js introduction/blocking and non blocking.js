// Synchronous or Blocking: -line by line execution
const fs = require('fs');
let text = fs.readFile('intro/node js introduction/nodedocumentation.txt', 'utf-8', (err, data) =>{
    console.log(err, data);
});
console.log('The message is', text);

// Asynchronous or Non-blocking:-line by line execution not guarenteed, -callback will fire

