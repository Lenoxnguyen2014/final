const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
var app = express();

const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/views'));

hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear;
});

hbs.registerHelper('getNewHeader', () => {
    myHeader = new Headers(),
    myHeader.append('Hello')
    return myHeader
});

app.get('/', (Request,Response) => {
    Response.render('index.hbs', {
        title: 'Main',
        year: new Date().getFullYear()

    });
});




app.get('/404', (request, Response) => {
    Response.send({
        error: 'Page not found'
    })
});

app.listen(port,() => {
    console.log(`Server is up on the port ${port}`);
});
