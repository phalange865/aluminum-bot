const discord = require("discord.js");
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
  const msg = message.content.match(/\((.*)\)/)[1];
  const data = msg.split(",")

  let newData = {
    wer: data[0],
    bi: data[1],
    aluminum: data[2],
    antimony: data[3],
    argon: data[4],
    potassium: data[5]
  };

  let jsonData = JSON.stringify(newData, null, 2);

  fs.writeFile('./json/replies.json', jsonData, (err) => {
    if (err) throw err;
     return message.channel.send("done!")
  });
};

module.exports.help = {
name: "replies"
};
