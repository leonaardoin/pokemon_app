const express = require('express')
const app = express();
const port = 3000 

const pokemon = require('./models/pokemon.js');


app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

app.get('/', (req, res)=>{
    res.send('Welcome to the Pokemon App!<br/><br/><a href="http://localhost:3000/pokemon">See All...</a>')
})

app.get('/pokemon', (req, res)=>{
    res.render('Index', {pokemon: pokemon})
})

app.get('/pokemon/:id', (req, res)=>{
    res.render('Show', {pokemon: pokemon[req.params.id]})
})

app.listen(port, () => {
    console.log(`Listening to server on, ${port}`)
});