const express = require('express');
const fs = require('fs');
// console.log(express);//print the All fumction of express in terminal
const app = express();
const path = require('path');
const port = 80;
//Express Specific Stuff
app.use('/static', express.static('static'));//For serving static files  
app.use(express.urlencoded())


//Pug Specific Stuff    
app.set('view engine', 'pug');//set the template engine as pug  

app.set('views', path.join(__dirname, 'views'));//set the view directory
console.log('THis directory name is:',__dirname)//what do __dirname do that testing 

//our pug demo endpoint             
app.get("/", (req, res)=> {
    let con = 'This is the best content on internet so far  so use it wisely'
    const param = {'title':"PubG is best game", 'content': con }
    res.status(200).render('index.pug', param)
});

//when data are submiting in form that time we need this
app.post('/', (req, res)=>{
    console.log(req.body);  
    console.log(req.body.Username);  
    console.log(req.body.Fullname);  
    console.log(req.body.email);  
    console.log(req.body.password);  

    const param = {'message':"Your form submitted successfully." }
    res.status(200).render('index.pug', param)
});

// app.get("/demo", (req, res)=> {
//     res.status(200).render('demo', { title: 'Hey ErMapsh', message: 'Hello there & welcome to PCCommunity!' })
// });





// app.get("/", (req, res)=> {
//     res.send("This is my Home page and this is first express app with Harry");
// });


// app.get("/contact", (req, res)=> {
//     res.setHeader('Content-Type','text/html');
//     res.status(200).send(fs.readFileSync('D:/study/code with harry/webdeveplopment/intro/html intro/image and links.html'));
// });
// app.post("/contact", (req, res)=> {
//     res.setHeader('Content-Type','text/html');
//     res.send('This is post request ');
//     // res.send(fs.readFileSync('D:/study/code with harry/webdeveplopment/intro/html intro/image and links.html'));
// });
 

// app.get("/this", (req, res)=>{
//     res.status(404).send('This page is not found');
// });



//Start the Server
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});