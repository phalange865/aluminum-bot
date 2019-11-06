require('dotenv').config()

const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();

// When bot ready
bot.on("ready", async () => {
  console.log(`${bot.user.username} is ready for action!`);
  bot.user.setActivity("Jackstone");
});

// Load commands
bot.commands = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");

  if (jsfiles.length <= 0) return console.log("There are no commands to load...");

  console.log(`Loading ${jsfiles.length} commands...`);
  jsfiles.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${i + 1}: ${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

// Message event
bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = process.env.PREFIX;
  let messageArray = message.content.split(" ");
  let command = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);

  if (!command.startsWith(prefix)){
    myMessages(message);
  }else{
    let cmd = bot.commands.get(command.slice(prefix.length));
    if (cmd) cmd.run(bot, message, args);
  }
});

bot.login(process.env.BOT_TOKEN);

//custom functions
function myMessages(message){
  const MongoClient = require('mongodb').MongoClient
  const uri = process.env.MONGODB_URI
  var content = message.content.toLowerCase();

  MongoClient.connect(uri, function(err, db) {
    if (err) {
      console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
    }
    else{
      var dbo = db.db("heroku_wmh62vg1");
      var collection = dbo.collection("replies");
        collection.find().toArray((err, items) => {

          switch(content) {
//             case 'wer u':
//             message.channel.send(items[0].wer);
//             break;
//             case 'bi':
//             message.channel.send(items[0].bi);
//             break;
            case 'aluminum':
            message.channel.send(items[0].aluminum);
            break;
            case 'antimony':
            message.channel.send(items[0].antimony);
            break;
            case 'argon':
            message.channel.send(items[0].argon);
            break;
            case 'potassium':
            message.channel.send(items[0].potassium);
            break;
          }
      });
    }
  });
}
