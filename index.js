//create Discord client
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();

//add commands to the Client
const infoCmd = require('./commands/randomization/args-info.js');
client.commands.set(infoCmd.name, infoCmd);

//import one time events and run them
const eventReady = require('./events/once/ready.js');
client.once(eventReady.name, (...args) => eventReady.execute(...args, client));

//import on events and run them
const eventMessage = require('./events/on/message.js');
client.on(eventMessage.name, (...args) => eventMessage.execute(...args, client));

//log bot into discord API
const { token } = require('./config.json');
client.login(token);
