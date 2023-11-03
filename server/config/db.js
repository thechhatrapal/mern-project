const mongoose = require('mongoose')


const connectDb = async () => {
    const conn = await mongoose.connect(process.env.MONGO_DB)

    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold)
}

module.exports = connectDb;