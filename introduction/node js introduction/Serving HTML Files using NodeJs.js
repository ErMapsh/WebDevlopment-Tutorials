const http = require('http');
const fs = require('fs');

const fileContent = fs.readFileSync('D:/study/code with harry/webdeveplopment/intro/intro cascading style shit/CreatingTransitionsinCSS.html'); 

const server = http.createServer(( req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(fileContent);
})

server.listen(80, '127.0.0.1', ()=>{
    console.log('listening on port 80..');
})  