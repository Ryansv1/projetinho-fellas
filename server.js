const express = require('express');
const app = express();
const bodyParser = require('body-parser');


// set the view engine to ejs
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));

// index page
app.get('/', (req, res) => {
    res.render('pages/signin',{title : 'Lycooper'});
});

app.post('/User', (req,res) => {
    const userCredentials = req.body;
    console.log(req.body.userLogin);
})

app.listen(8080);
console.log('8080 is the magic port');