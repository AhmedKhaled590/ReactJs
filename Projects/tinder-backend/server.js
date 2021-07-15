import express from 'express'
import mongoose from 'mongoose'
import Cards from './tinder-cards.js'
import cors from 'cors'

//App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://admin:zTbmqNIx9rQj2bAI@cluster0.l6yrn.mongodb.net/tinder-DB?retryWrites=true&w=majority`

//Middle Layers
app.use(express.json());
app.use(cors());

//DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

//API Endpoints
app.get('/', (req, res) => res.status(200).send("HELLO WORLD!!"))

app.post('/tinder/card', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err)
            res.statue(500).send(err);
        else
            res.status(201).send(data);
    })
})



app.get('/tinder/card', (req, res) => {

    Cards.find((err, data) => {
        if (err)
            res.statue(500).send(err);
        else
            res.status(200).send(data);
    })
})

//Listner
app.listen(port, () => console.log(`listening to port ${port}`));