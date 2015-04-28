Movies = new Mongo.Collection('movies');

// Generates: GET, POST, DELETE on /api/items and GET, PUT, DELETE on
// /api/items/:id for Items collection
Restivus.addCollection(Movies);
