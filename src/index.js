const express = require('express')
const bodyParser = require('body-parser')
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express')
const schema = require('./schema')

// 1 Conect mongodb
const connectMongo = require('./mongo-connector')

// 2
const start = () {
  const mongo = await connectMongo()

  var app = express()
  app.use('/graphql', bodyParser.json(), graphqlExpress({
    context: {mongo},
    schema
  }))

  app.use('/graphiql', graphiqlExpress({
    endpointURL: 'graphql'
  }))

  const PORT = 3000
  app.listen(PORT, () => {
    console.log(`Hackernews GraphQL server running on port ${PORT}.`)
  })
}

start()
