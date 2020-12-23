const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const book = require('./router/Book');

app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());

mongoose.connect("mongodb://localhost:27017/restApiDB",({
    useNewUrlParser: true, useUnifiedTopology: true
}))
.then( ()=>{
    console.log('mongodb is connected')
})
.catch( (err)=>{
    console.log(err)
});

app.use('/', book);


const db = mongoose.connection;

const PORT = process.env.port || 3000;

app.get('/' , (req, res)=>{
    res.send(`express is connected with ${PORT}`);
});

app.listen(PORT , ()=>{
    console.log(`express is connected with ${PORT}`)
})