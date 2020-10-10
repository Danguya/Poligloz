const express       = require('express');
const routes        = require('./routes');
const bodyParser    = require('body-parser');
require('dotenv').config();
const mongoose      = require('mongoose');
const myServer      = express();
const PORT          = 3333;

myServer.use(bodyParser.json());
myServer.use(routes);
myServer.use(express.json());

mongoose.connect(process.env.DATABASE_CONNECTION,{ useUnifiedTopology: true, useNewUrlParser: true},function(err, db){
    if(!err){
        console.log('Connected to Database');
    }else{
        console.log('Error with Database');
    }
});


myServer.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})