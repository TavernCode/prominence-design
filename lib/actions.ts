import { GraphQLClient } from "graphql-request";

const isProduction = process.env.NODE_ENV === 'production'

const client = new GraphQLClient('apiUrl')

const makeGraphQLRequest = async (query: string, variable = {}) => {
    try {

    } catch (error) {
        throw error;
    }
}