// require the discord.js module
const Discord = require('discord.js');

module.exports = (message) => {
  const validPrefixUsed = message.content.startsWith(config.prefix)
  const command = message.content.substring(1, message.content.indexOf(' '))
  const query = message.content.substring(message.content.indexOf(' ') + 1)
  if (command === 'play') {
    message.channel.send('I wish i could fetch u the youtube api into the vc, but im too lazy rn');
  }
  if (query === '') {
    message.channel.send('Pong.');
  }
}
