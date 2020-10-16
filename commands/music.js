// require the discord.js module
const Discord = require('discord.js');

module.exports = (message) => {
  const query = message.content.substring(message.content.indexOf(' ') + 1)
  if (query === 'ping') {
    message.channel.send('Pong.');
  }
}
