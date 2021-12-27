require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose');
const indexRouter = require('./routes')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', indexRouter)

app.use(express.static('public'))

app.listen(3000, () => console.log('server started'))

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => console.log('Database Connected'))
    .catch((error) => console.log(error))
