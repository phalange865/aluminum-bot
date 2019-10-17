require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')

client.login(process.env.BOT_TOKEN).then(() => {
  var guild = client.guilds.get(process.env.GUILD_ID);

  if(guild && guild.channels.get(process.env.CHANNEL_ID)){

    //GET message
    var message = require('./message/message.json');

    //SEND message :)
    let rythm = bot.users.find("username", "Rythm").presence.status

    if(rythm !== 'offline'){
      guild.channels.get(process.env.CHANNEL_ID).send("!play its time to stop").then(() => client.destroy());
    }

    guild.channels.get(process.env.CHANNEL_ID).send("<@594396794658750465>,"+message.name + " " + message.message).then(() => client.destroy());

    //END
  }
  else{
    return;
    //throw error or best do nothing haha
  }

  client.destroy();
});
