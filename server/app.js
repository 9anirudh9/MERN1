const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'})
require('./db/conn') 

const PORT = process.env.PORT;
//const User = require('./model/userSchema');
  
/*const middleware = (req, res, next )=>{
    console.log(`Hello Middleware`);
    next();
}

middleware();
*/

app.get('/',(req, res)=>{
    res.send('Welcome Welcome');
});

app.get('/about', 

 (req, res)=>{
    res.send('This is the about page');
});

app.get('/contact',(req, res)=>{
    res.send('Welcome contact Welcome');
});

app.get('/signin',(req, res)=>{
    res.send('Welcome signin Welcome');
});

app.get('/signup',(req, res)=>{
    res.send('Welcome signup Welcome');
});


app.listen(PORT,() =>{
    console.log(`Console running at ${PORT}`);
});