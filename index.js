const express = require('express');
const app = express();
const port=9000;
const expressLayouts= require('express-ejs-layouts')
const db = require('./config/mongoose')

app.use(express.static('./assets'))

app.use(expressLayouts);

// app.use(express.urlencoded({ extended: true }))

// app.use(express.static('./assets'))



// Extract styles and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


//Set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Use express router
app.use('/', require('./routes'))

app.listen(port,function(error)
{
    if(error)
    {
        console.log(`Error in runnin the server. Error is ${error}`)
    }

    console.log(`Server is up on the port : ${port}`)
})