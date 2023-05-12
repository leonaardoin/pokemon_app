const express = require('express')
const app = express()
const port = 3000
const Pokemon = require('./models/pokemon.js')
const mongoose = require('mongoose');


require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.use(express.urlencoded({extended:false}));

// Middleware here
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

app.use((req, res, next) => {
    // console.log('I run for all routes');
    next();
});

//routes
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!<br></br><a href="/pokemon" >pokemon</a>')
})

app.get('/pokemon', (req, res)=>{
    Pokemon.find({}, (error, allPokemon)=>{
        res.render('Index', {
            pokemon: allPokemon
        });
    });
});

app.get('/pokemon/new', (req, res) => {
    res.render('New');
});

app.post('/pokemon', (req, res)=>{
    Pokemon.create(req.body, (error, createdPokemon)=>{
        res.redirect('/pokemon');
    });
});

app.get('/pokemon/:id', (req, res) => { 
      Pokemon.findById(req.params.id, (error, foundPokemon)=>{
      res.render('Show', { //second param must be an object
          pokemon:foundPokemon
        });
    })
})


app.listen(port, () => {
    console.log(`Listening on, ${port}`)
})