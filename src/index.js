const express = require('express');
const morgan = require('morgan');
const app = express();
const router = require('./routes/allroutes');


//Setting
app.set('port',process.env.PORT || 4000);

//Midlewares
app.use(morgan('dev'));

//Global Variables


//Routes
app.use(router);


//starting the server
app.listen(app.get('port'),()=>{
    console.log(' Server on port',app.get('port'));
})

