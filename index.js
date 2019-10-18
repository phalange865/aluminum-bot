const MongoClient = require('mongodb').MongoClient
const uri = "mongodb://heroku_wmh62vg1:oa6ab4v6f6cf7tj65hga56ng0g@ds335668.mlab.com:35668/heroku_wmh62vg1"

MongoClient.connect(uri, function(err, db) {
  if (err) {
    console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
  }else{
    console.log("Database created!");
    db.close();
  }

});
