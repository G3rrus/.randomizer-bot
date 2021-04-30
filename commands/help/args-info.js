// import of command prefix of YOUR choice
const { prefix } = require('../../config.json');

exports.name = 'args-info';
exports.description = 'Gives you info on a specific command.';
exports.aliases = ['help', 'info'];
exports.usage = `${prefix}args-info ${prefix}command`;
exports.cooldown = 2;

const cmdFnc = function(message, args, commands) {
	if (!args) return message.channel.send(`No parameter was given! See \`${prefix}args-info ${prefix}args-info\` for more information.`);

	const commandName = args[0].slice(prefix.length, args[0].length).toLowerCase();
	const command = commands.get(commandName) || commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	if (!command) return message.channel.send(`Could not find command: ${args[0]}. Use ${prefix}command-list for a list of available commands.`);

	return message.channel.send(`__**${prefix}${command.name}:**__\n Description: ${command.description}\n Aliases: [${command.aliases}]\n Usage: ${command.usage}`);
};
exports.cmdFnc = cmdFnc;
