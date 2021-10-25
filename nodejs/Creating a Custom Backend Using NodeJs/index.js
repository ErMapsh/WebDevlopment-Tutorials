const fs = require('fs');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const index = fs.readFileSync('D:/study/code with harry/webdeveplopment/Creating a Custom Backend Using NodeJs/index.html');
const services = fs.readFileSync('D:/study/code with harry/webdeveplopment/Creating a Custom Backend Using NodeJs/services.html');
const about = fs.readFileSync('D:/study/code with harry/webdeveplopment/Creating a Custom Backend Using NodeJs/about.html');
const tech = fs.readFileSync('D:/study/code with harry/webdeveplopment/Creating a Custom Backend Using NodeJs/tech.html');

const server = http.createServer((req, res) =>{ 
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');

    console.log(req.url);
    url = req.url;

    if (url == '/')
    {
        res.end(index);
    }
    else if (url == '/services')
    {
        res.end(services);
    }

    else if (url == '/about')
    {
        res.end(about); 
    }
    else if (url == '/tech')
    {
        res.end(tech);
    }
    else
    {
        res.statusCode = 404;
        res.end('<h1>404 not found</h1>');
    }
});

server.listen(port, hostname, ()=> {
    console.log(`Server running at http:${hostname}:${port}/`);
})