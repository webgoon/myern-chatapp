const express = require('express');

const app = express();

const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

app.use(express.json())

const port = 4000

app.get('/test', (req, res) => {
    res.json('test okay')
})

app.get('/usersAll', async (req, res) => {
    
    const allUsers = await prisma.user.findMany();
    res.json(allUsers);
})

app.post('/register', async (req, res) => {

    console.log('register', req.body)

    const newUser = await prisma.user.create({
        data: {
            email: req.body.email,
            hashedPassword: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        }
    })

    res.json(newUser);
})


app.listen(port, () => {
    console.log('Api Listening on Port', port)
})



