const MongoClient = require('mongodb').MongoClient
const uri =

MongoClient.connect(uri, function(err, db) {
  if (err) {
    console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
  }else{
    console.log("Database created!");
    db.close();
  }
});
