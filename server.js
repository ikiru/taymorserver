import express from "express";
import { json } from "body-parser";
import graphqlHTTP from "express-graphql";
import schema from "./graphql/schemas";
import mysql from "mysql";

import { buidSchema } from "graphql";

var app = express();


// app.use(json());



app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

// // The GraphQL endpoint
// app.use(
//   "/graphql",
//   (req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader(
//       "Access-Control-Allow-Methods",
//       "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//     );
//     res.setHeader(
//       "Access-Control-Allow-Headers",
//       "X-Requested-With, content-type, secret, token"
//     );

//     if (req.method === "OPTIONS") {
//       res.sendStatus(200);
//     } else {
//       next();
//     }
//   },
//   graphqlHTTP( async request => ({
//     schema: await schema(request.headers),
//     graphiql: false
//   }))
// );

// connection.connect(function(error){
//   if(!!error){
//     console.log('Error');
//   }else{
//     console.log('I can hear you scream on port ')
//   }
// })

app.get('/', function(req,resp){

});

app.listen(5000, () => {
  console.log(
    "I can hear you scream on port localhost:5000/graphql. \nUse localhost:9005/graphiql to run queries"
  );
});