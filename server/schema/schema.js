const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList } = require("graphql");
const { projects, clients } = require("../sampleData");

const Project = require('../models/Project');
const Client = require("../models/Client");
const clientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        phone: {type: GraphQLString},
    })
});


const projectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        status: {type: GraphQLString},
        client : {
            type: clientType,
            args: {id : { type: GraphQLID}},
            resolve(parent, args) {
                return clients.findById(parent.clientId)
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields : {
        projects : {
            type: new GraphQLList(projectType),
            resolve(parent, args) {
                return Project.find()
            }
        },
        project: {
            type: projectType, 
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return Project.findById(args.id)
            }
        },
        clients : {
            type: new GraphQLList(clientType),
            resolve(parent, args) {
                return Client.find()
            }
        },
        client: {
            type: clientType, 
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return clients.findById(args.id)
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery
})