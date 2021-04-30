const Discord = require('discord.js');
// import of valid token from YOUR discord dev application https://discord.com/developers/applications
const { token } = require('./config.json');
const events = require('./events');
const cmds = require('./commands');

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();

// add commands to the Client
for (const command in cmds) {
	client.commands.set(cmds[command].name, cmds[command]);
}

client.once(events.evReady.name, (...args) => events.evReady.fnc(...args, client));
client.on(events.evMessage.name, (...args) => events.evMessage.fnc(...args, client));

// log bot into discord API
client.login(token);
