//fs is module means file system that allow to access file
const fs = require('fs');
// console.log(fs);//show all fuctions in fs

let text = fs.readFileSync('intro/node js introduction/nodedocumentation.txt', 'utf-8');
console.log('in file content is', text);
let replcaeText = text.replace('writing', 'writing and understanding');
console.log(replcaeText);

console.log('creating a new file....');
fs.writeFileSync('D:/study/code with harry/webdeveplopment/intro/node js introduction/NEWFILE.txt', 'this is new file in nodejs tutorial using writeFileSync')
fs.writeFileSync('D:/study/code with harry/webdeveplopment/intro/node js introduction/NEWFile2.txt', replcaeText);



