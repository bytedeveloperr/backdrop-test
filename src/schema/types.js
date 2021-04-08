module.exports = `
   type Url {
     id: ID!
     longurl: String!
     shorturl: String!
     code: String!
   }
   
   type Query {
   	shortenURL(longurl: String): Url!
   }
   
   schema {
   	query: Query
   }
`;
