/*
  BetterOff Productions
  Notes - 

  created - Jeff Winkler  05/21/2018

***********************************************************************
  modified - 

*/

import sql from "mysql";
import { cpool } from "../db";
import graphql from "graphql";
import { buildSchema } from "graphql";
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean, GraphQLInputObjectType, GraphQLList } from "graphql";


const schema = buildSchema(`
    type Query {
        message: String
    }
`);

// Root resolver
const root = {
  message: () => 'Hello World!'
};

// const Colors = new GraphQLObjectType({
//   name: 'Colors',
//   description: 'The primary and secondary color of the costume',
//   fields: {
//     id: {
//       name: 'Identifier for the color',
//       description: 'id number for the color',
//       type: GraphQLInt,
//       resolve: function (source, args, context, info) {
//         return source.id;
//       }
//     },
//     name: {
//       name: 'Name of the color',
//       description: 'Name of the primary and secondary color for the costumes',
//       type: GraphQLString,
//       resolve: function (source, args, context, info) {
//         return source.name;
//       }
//     }
//   }
// })