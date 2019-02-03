const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
let io = require('socket.io')
let mongoose = require('mongoose')
let bodyParser = require('body-parser');

let God = mongoose.model('god', {
    name: String,
    mythology: String,
    description: String,
    Weapon: String
})

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

mongoose.Promise = Promise;

let dbURL = "mongodb://RhysJones:Scoobydoo2!@ds131753.mlab.com:31753/learning-node"

app.get('/gods', (req, res) => {
    God.find({}, (err, gods) => {
        res.send(gods)
    })
})

app.post('/gods', async (req, res) => {
    console.log(req.body)

    console.log(req.headers)

    try{
        let god = new God(req.body)
        
        let saved = await god.save()
        
        res.sendStatus(200)
    }
    catch(error)
    {
        res.sendStatus(500)
    }
})

app.listen(port, () => console.log(`Listening on port: ${port}`))

mongoose.connect(dbURL, {useNewUrlParser: true }, (err) =>{
    console.log("mongo DB connection", err);
});

app.get('/express_backend', (req, res) => {
    res.send({express:'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'})
})