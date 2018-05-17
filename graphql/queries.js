const pg = require("pg");
const {cpool} = require("../db");

const {GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString} = require("graphql");
const { Colors } = require("./schema.js");
// import { } from "./enums";
// const { } = require("../enums/enums");

const QueryRoot = new GraphQLObjectType({
name: "Queries",
description: "All the queries for the schema",
fields: {
  colors: {
    name: 'color',
    type: new GraphQLList(color),
    description: "Base Colors for the costumes",
    },
    resolve: function(source, args, context, info) {
      return cpool.then(pool => {
        return pool.request().input('color', args.id).execute('')
      }).then(result => {
        return result.recordsets[0]
      }).catch(err => {
        console.log(err)
      })
    }
  },

})