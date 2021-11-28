const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect(`mongodb+srv://YuLim2:<password>@firstcluster.qtt7c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})