const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect(`mongodb+srv://YuLim2:sun138814%21@firstcluster.qtt7c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, ).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('하이!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})