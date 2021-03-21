listProduit = [
    {
        produitName : "bouteil d'eau" ,
        produitPrix : 1,
        produitStatus : "non acheté"
    },
    {
        produitName : "chocolat" ,
        produitPrix : 2.5,
        produitStatus : "non acheté"
    },
    {
        produitName : "gateaux" ,
        produitPrix : 4,
        produitStatus : "non acheté"
    }
]

const express = require('express');
const server = express();
const http = require('http').Server(server);
const port = process.env.PORT || 3000;
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require("cors");

var corsOptions = {
    origin: '*'
};
server.use(express.static('public'));

server.use('/graphql',cors(corsOptions));
 

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query 
  {
    tab: [Produit]
  }
  type Produit
  { 
      produitName : String
      produitPrix : Float
      produitStatus : String
  }
`);
 
// The root provides a resolver function for each API endpoint
var root = {
  tab: () => {
    return listProduit;
  }
};
 

server.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
server.listen(4100);
console.log('Running a GraphQL API server at http://localhost:4100/graphql');

