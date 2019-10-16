'use strict';
const fs = require('fs');

module.exports = (client, message) => {
  if (message.content.startsWith('!change')) {
    const msg = message.content.match(/\((.*)\)/)[1];
    const data = msg.split(",")

    let newData = {
      name: data[0],
      message: data[1]
    };

    let jsonData = JSON.stringify(newData, null, 2);

    fs.writeFile('message.json', jsonData, (err) => {
      if (err) throw err;
       message.channel.send("yey!")
    });
  }
  else if(message.content.startsWith('!replies')){
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

    fs.writeFile('replies.json', jsonData, (err) => {
      if (err) throw err;
       message.channel.send("yis!")
    });
  }

  else if(message.content.startsWith('!message')){
    var msg = require('../message.json');
    message.channel.send(msg.name+" "+msg.message);
  }
  else{
    var msg = require('../replies.json');
    if (message.content === 'wer u'){
      message.channel.send(msg.wer);
    }
    else if (message.content === 'bi'){
      message.channel.send(msg.bi);
    }
    else if (message.content === 'aluminum'){
      message.channel.send(msg.aluminum);
    }
    else if (message.content === 'antimony'){
      message.channel.send(msg.antimony);
    }
    else if (message.content === 'argon'){
      message.channel.send(msg.argon);
    }
    else if (message.content === 'potassium'){
      message.channel.send(msg.potassium);
    }
  }
}
