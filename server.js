
/*
  BetterOff Productions
  Notes - 

  created - Jeff Winkler  05/21/2018

***********************************************************************
  modified - 

*/


import express from "express";
import express_graphql from "express-graphql";
import schema from "./graphql/schemas";


// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    pretty: true,
    graphiql: true
}));

app.listen(5000, () => {
  console.log(
    "I can hear you scream on port 5000/graphql. \nRun your godforsaken queries on localhost:5000/graphiql you heathen"
  );
});

