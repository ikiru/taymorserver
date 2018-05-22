import mysql from "mysql";
import {cpool} from "../db";

import {GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString} from "graphql";
import {
  Colors
} from "./schema.js";;

const QueryRoot = new GraphQLObjectType({
  name: "Queries",
  description: "All the queries for the schema",
  fields: {
    colors: {
      name: 'color',
      type: new GraphQLList(color),
      description: "Base Colors for the costumes"
    },
    resolve: function (source, args, context, info) {
      return cpool.then(pool => {
        return pool
          .request()
          .input('color', args.id)
          .execute('')
      }).then(result => {
        return result.recordsets[0]
      }).catch(err => {
        console.log(err)
      })
    }
  }
})