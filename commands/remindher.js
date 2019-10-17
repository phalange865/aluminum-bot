const discord = require("discord.js");
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
  const msg = message.content.match(/\((.*)\)/)[1];
  const data = msg.split(",")
  let newData = {
    name: data[0],
    message: data[1]
  };
  let jsonData = JSON.stringify(newData, null, 2);

  fs.writeFile('./json/message.json', jsonData, (err) => {
    if (err) throw err;
    return message.channel.send("done!")
  });
};

module.exports.help = {
name: "remindher"
};
