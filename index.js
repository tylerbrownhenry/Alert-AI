const classifier = require('./classifier');
const express = require('express');
const app = express();
const port = 4000;

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use( express.static( "public" ) );
// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/classify',(req,res)=>{
    console.log('req',req);
    res.json(classifier.run(req.query));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))