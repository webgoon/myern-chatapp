const express = require('express');

const app = express();

app.use(express.json())

const port = 4000

app.get('/test', (req, res) => {
    res.json('test okay')
})

app.post('/register', (req, res) => {
    res.json('register okay')
})


app.listen(port, () => {
    console.log('Api Listening on Port', port)
})

