const mongoose = require('mongoose');
const MONGODBLOCAL_URI = require('../config/connect')



const db = async () => {
    try {
        mongoose.set("strictQuery", false)
        await mongoose.connect(MONGODBLOCAL_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('mongodb connected successfully')
    } catch (err) {
        console.log(err)
  }
}

module.exports = db;