const { prefix } = require('../../config.json');

exports.name = 'args-info';
exports.description = 'Gives you info on how to use a specific command.';
exports.aliases = ['help', 'info'];
exports.usage = '[command usage #1]\n[command usage #2]';
exports.cooldown = 2;

const cmdFnc = function(message, args, commands) {
	const commandName = args[0].slice(prefix.length, args[0].length).toLowerCase();
	const command = commands.get(commandName) || commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	if (!command) return message.channel.send(`Could not find command: ${args[0]}`);

	return message.channel.send(`Relevant arguments are: ${prefix}${command.name}, ${command.description}, [${command.aliases}], ${command.usage}`);
};
exports.cmdFnc = cmdFnc;
