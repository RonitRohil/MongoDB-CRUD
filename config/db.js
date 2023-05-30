const mongoose = require('mongoose')

const conn = mongoose.connect('mongodb://127.0.0.1/stco')
.then(()=>console.log('connected to db'))
.catch(()=>console.log('error in connection'))

// console.log(conn)
module.exports = conn