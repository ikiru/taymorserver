const express = require( "express");
const bodyParser = require ("body-parser");
const graphqlHTTP = require("express-graphql");
const schema =require("./graphql/schemas");
const mysql = require("mysql");

var {buidSchema} = require('graphql');

var app = express();


app.use(bodyParser.json());


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Pepper00~~',
  database: 'Taymor',

});

// // The GraphQL endpoint
app.use(
  "/graphql",
  (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With, content-type, secret, token"
    );

    if (req.method === "OPTIONS") {
      res.sendStatus(200);
    } else {
      next();
    }
  },
  graphqlHTTP( async request => ({
    schema: await schema(request.headers),
    graphiql: false
  }))
);

connection.connect(function(error){
  if(!!error){
    console.log('Error');
  }else{
    console.log('I can hear you scream on port ')
  }
})

app.get('/', function(req,resp){

});

app.listen(1337);