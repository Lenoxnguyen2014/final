const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
var app = express();
const nasa = require('./nasa');

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

app.get('/gallery',(request,Response) => {
    Response.render('gallery.hbs', {
        title: 'Gallery',
        main: 'Hello',
        year: new Date().getFullYear()
    })
});
nasa.getNum(5).then((result) => {
    console.log(result['deck_id'])
    var deck_id = result['deck_id']
    console.log(result['cards'])
    url=`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=5`

});

// nasa.getImage().then((result)=>{
//     console.log(result)
// })



app.get('/404', (request, Response) => {
    Response.send({
        error: 'Page not found'
    })
});

app.listen(port,() => {
    console.log(`Server is up on the port ${port}`);
});
