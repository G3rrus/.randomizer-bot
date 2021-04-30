// import of command prefix of YOUR choice
const { prefix } = require('../../config.json');
const Discord = require('discord.js');

exports.name = 'message';
exports.fnc = function(message, client) {
	if (!message.content.startsWith(prefix) || message.content === prefix || message.author.bot) return;

	const mssgCnt = message.content.slice(prefix.length, message.content.length);
	const firstSpace = mssgCnt.indexOf(' ');

	let cmdArgs;
	let commandName = mssgCnt.trim().toLowerCase();

	if (firstSpace !== -1) {
		commandName = commandName.slice(0, firstSpace);
		cmdArgs = mssgCnt
			// exlude command itself.
			.slice(firstSpace, mssgCnt.length)
			// split at commas.
			.split(/,+ */)
			// kill whitespace around elemts.
			.map(function(item) {return item.trim();})
			// kill potential empty str.
			.filter(function(item) {return item !== '';});
	}

	// either command is found in commands or its an alias found in any cmd.
	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	if (!command) return;

	const { cooldowns } = client;
	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}
	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 1) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`You must wait for ${timeLeft.toFixed(1)} second(s) before using the command again.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.cmdFnc(message, cmdArgs, client.commands);
	}
	catch (error) {
		console.error(error);
		message.reply('There has been an error trying to process the command! :(');
	}
	return;
};
