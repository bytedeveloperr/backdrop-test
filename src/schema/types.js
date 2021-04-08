module.exports = `
   type Url {
     id: ID!
     longurl: String!
     shorturl: String!
     code: String!
   }
   
   type ShortUrl: String!

   type Query {
   	shortenURL(url: String): ShortUrl!
   }
   
   schema {
   	query: Query
   }
`;
