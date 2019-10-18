require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
const MongoClient = require('mongodb').MongoClient

client.on("ready", async () => {
 const channel = client.channels.get("mychannelid");
 if (!channel) return console.error("The channel does not exist!");
 channel.join().then(connection => {
   // Yay, it worked!
   console.log("Successfully connected.");
 }).catch(e => {
   // Oh no, it errored! Let's log it to console :)
   console.error(e);
 });
});


client.login(process.env.BOT_TOKEN).then(() => {
  var guild = client.guilds.get(process.env.GUILD_ID);
  var channel = guild.channels.get(process.env.CHANNEL_ID);
  const uri = process.env.MONGODB_URI

  if(guild && channel){

    channel.join().then(connection => {
      let rythm = bot.users.find("username", "Rythm").presence.status
      if(rythm !== 'offline'){
        guild.channels.get(process.env.CHANNEL_ID).send("!play its time to stop").then(() => client.destroy());
      }

      MongoClient.connect(uri, function(err, db) {
        if (err) {
          console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
        }
        else{
          var dbo = db.db("heroku_wmh62vg1");
          var collection = dbo.collection("messages");

            collection.find().toArray((err, items) => {
              guild.channels.get(process.env.CHANNEL_ID).send("<@594396794658750465>,"+items[0].name + " " + items[0].message).then(() => client.destroy());
            });
        }
      });

    }).catch(e=>{
      console.error(e);
    });

    //END
  }

  else{
    return;
    //throw error or best do nothing haha
  }

  client.destroy();
});
