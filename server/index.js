const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')
const colors = require('colors')
const connectDb = require('./config/db')

require('dotenv').config();
const app = express()


// connect your database
connectDb()

app.use('/graphql', graphqlHTTP({
    schema, 
    graphiql: process.env.NODE_ENV === 'development'
}))

const PORT = process.env.PORT
app.listen(PORT, console.log(`server is running on ${PORT}`))