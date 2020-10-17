const config = require('./config.json')
// require the discord.js module
const Discord = require('discord.js')

// create a new Discord client
const client = new Discord.Client()

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
  const validPrefixUsed = message.content.startsWith(config.prefix)
  const command = message.content.substring(1)

  if (validPrefixUsed) {
  	// All command routes go here
    if (command === 'music') {
      require('./commands/music.js')(message)
    }
  }
  if (message.content === 'ping') {
    message.channel.send('Pong.');
  }
  if (message.content === 'who is gay') {
    message.guild.members.fetch().then((members) => {
      console.log(members.array())
      const membersArray = members.array()
      const randomMember = membersArray[Math.floor(Math.random() * membersArray.length)]
      message.channel.send(randomMember.toString() + 'is the gay');
    }).catch(console.error);
  }
});


// login to Discord with your app's token
client.login(config.token)
