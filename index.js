const express = require('express')
const app = express()
const port = 3000 // 3000번 포트를 백서버로
const bodyParser = require('body-parser'); // body-parser 불러오기

const config = require("./config/key");


// application/x-ww-form-urlencoded 분석해서 가져옴
app.use(bodyParser.urlencoded({ extended: true }));

// application/json 분석해서 가져옴
app.use(bodyParser.json());


const mongoose = require('mongoose')
mongoose.connect(config.mongoURL) // db 연결
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


app.get('/', (req, res) => { // root일 때   
    res.send('하이!_수정사항 ')
})


const { User } = require("./models/User"); // user 모델 불러오기

app.post('/register', (req, res) => { // client에서 user 정보 가져오고 db에 저장
    const user = new User(req.body)

    user.save((err, userInfo) => { // 정보를 user모델에 저장
        if (err) return res.json({ success: false, err })
        return res.status(200).json({ success: true }) //200메소드 응답
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})