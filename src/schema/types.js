module.exports = `
   type Url {
     id: ID!
     longurl: String!
     shorturl: String!
     code: String!
   }
   
   type Query {
    # url - the url that wants to be shortened
   	shortenURL(longurl: String): Url!
   }
   
   schema {
   	query: Query
   }
`;
