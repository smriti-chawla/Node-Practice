/**
 * Created by TTND on 9/4/2017.
 */

const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req,res)=>{
    // res.send('hihihihihi')
    res.sendFile(path.resolve(__dirname,'./index.html'));
});

app.get('/about', (req,res)=>{
    // res.send('about')
    res.sendFile(path.resolve(__dirname,'./about.html'));
});

app.get('/my-account', (req,res)=>{
    // res.send('about')
    res.sendFile(path.resolve(__dirname,'./account.html'));
});


app.listen(9000,()=>{
    console.log('<h1>hihihihi </h1>')
});