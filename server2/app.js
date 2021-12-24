const express = require('express')
const app = express()
const indexRouter = require('./routes')

const timeStamp = (req, res, next) => {
    req.time = new Date()
    next()
}

app.use(timeStamp)

app.use('/', indexRouter)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static('public'))

app.listen(3000, () => console.log('Server Started'))

