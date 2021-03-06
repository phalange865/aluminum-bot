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
      var collection = dbo.collection("replies");
      var myquery = { "_id": "1" };
      var newvalues = { $set: {  "wer": data[0], "bi": data[1], "aluminum": data[2], "antimony": data[3], "argon": data[4], "potassium": data[5] } };
      collection.update(myquery, newvalues, function(err, res) {
        if (err) throw err;
        message.channel.send("done!");
        db.close();
      });
    }
  });
};

module.exports.help = {
  name: "replies"
};
