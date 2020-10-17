// require the discord.js module
const Discord = require('discord.js');

module.exports = (message) => {
  const validPrefixUsed = message.content.startsWith(config.prefix)
  const command = message.content.substring(1)
  const query = message.content.substring(message.content.indexOf(' ') + 1)
  if (command === 'play') {
    // TODO: Fix this. If query === validURL, play youtube api into vc else, send errorResolver, which needs to be made
    if (query) message.channel.send('I wish i could fetch u the youtube api into the vc, but im too lazy rn');
  }
}
