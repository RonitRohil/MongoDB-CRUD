const {Schema,model} = require('mongoose')

const userSchema = new Schema({
    sno: {
        type: Number
    },

    first_name: {
        type:String
    },

    last_name: {
        type: String
    },

    email: {
        type: String
    },

    phonenumber: {
        type: Number
    }
})


const user = model('user',userSchema)

module.exports = user