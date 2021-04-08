module.exports = `
   type Url {
     id: ID!
     longurl: String!
     shorturl: String!
     code: String!
   }
   
   scalar ShortUrl: String!

   type Query {
   	shortenURL(url: String): ShortUrl!
   }
   
   schema {
   	query: Query
   }
`;
