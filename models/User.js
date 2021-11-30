const monggose = require('mongoose');

const userSchema = monggose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    Image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

const User = monggose.model('User', userSchema) //스키마를 모델로 감싸기

module.exports = { User } //다른 파일에서도 쓸 수 있도록 export; 수출