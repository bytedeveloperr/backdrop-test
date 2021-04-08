module.exports = `
   type Url {
     id: ID!
     url: String!
     code: String!
   }
   
   type Query {
   	shortenURL(url: String): Url!
   }
   
   schema {
   	query: Query
   }
`;
