const discord = require("discord.js");
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient

module.exports.run = async (bot, message, args) => {
  const msg = message.content.match(/\((.*)\)/)[1];
  const data = msg.split(",")
  const uri = process.env.MONGODB_URI

  MongoClient.connect(uri, function(err, db) {
    if (err) {
      console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
    }
    else{
      var dbo = db.db("heroku_wmh62vg1");
      var collection = dbo.collection("messages");
      var myquery = { "_id": "1" };
      var newvalues = { $set: {  "name": data[0], "message": data[1] } };
      collection.update(myquery, newvalues, function(err, res) {
        if (err) throw err;
        message.channel.send("done!");
        db.close();
      });
    }
  });
};

module.exports.help = {
name: "remindher"
};
