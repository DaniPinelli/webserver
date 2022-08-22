const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Middleware to serve static files
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home',
        message: 'Welcome to the home page'
    })
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        title: 'Home',
        message: 'Welcome to the home page'
    })
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        title: 'Home',
        message: 'Welcome to the home page'
    })
});

// app.get('*', (req, res) => {
//     res.sendFile(__dirname + '/public/404.html')
// });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
