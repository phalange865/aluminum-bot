'use strict'
require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')

client.login(process.env.BOT_TOKEN).then(() => {
  var guild = client.guilds.get(process.env.GUILD_ID);

  if(guild && guild.channels.get(process.env.CHANNEL_ID)){

    //GET message
    var message = require('../message.json');

    //SEND message :)
    guild.channels.get(process.env.CHANNEL_ID).send(message.name + " " + message.message).then(() => client.destroy());
    //END


  }
  else{
    //throw error or best do nothing haha
  }

  client.destroy();
});
