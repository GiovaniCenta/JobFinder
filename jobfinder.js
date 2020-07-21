//=========================CONFIGURATION VARIABLES=========================

const express = require('express'); //create express interface
const app = express();
const db = require('./db/connection'); //do the connection with the sqlite database

const PORT = 3000;
//===========================================================================

//init
app.listen(PORT, function() {
    console.log("Express is running in port : " + PORT);
});

//db connection
db.authenticate().then(() => {
    console.log("Succesfully connected with the database! ");
}).catch(e=> {
    console.log("Error trying to connect : " + e);
});

//routes
app.get('/',(req,res) => {   //send a mensage if everything is ok
    res.send("OK3");
});