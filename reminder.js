require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()
const MongoClient = require('mongodb').MongoClient

client.login(process.env.BOT_TOKEN).then(() => {
  var guild = client.guilds.get(process.env.GUILD_ID);
  var channel = guild.channels.get(process.env.CHANNEL_ID);
  const uri = process.env.MONGODB_URI
  console.log(guild)
  console.log(channel)

  if(guild && channel){
      MongoClient.connect(uri, function(err, db) {
        if (err) {
          console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
        }
        else{
          var dbo = db.db("heroku_wmh62vg1");
          var collection = dbo.collection("messages");
          collection.find().toArray((err, items) => {
            guild.channels.get(process.env.CHANNEL_ID).send("<@594396794658750465>,"+items[0].name + " " + items[0].message);
            guild.channels.get(process.env.CHANNEL_ID).send("<@594396794658750465>,"+items[0].name + " " + items[0].message);
            guild.channels.get(process.env.CHANNEL_ID).send("<@594396794658750465>,"+items[0].name + " " + items[0].message);
          })
          console.log(collection)
        }
      });
  }

  else{
    return;
    //throw error or best do nothing haha
  }

  client.destroy();
});
