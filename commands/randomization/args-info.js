module.exports = {
	name: 'args-info',
	description: 'Test command to learn about arguments and formatting.',
    aliases: ['args', 'info'],
    usage: '[command usage]',
    guildOnly: true,
    cooldowns: 5,
    args: true,
	execute(message, args) {
        if (args.length < 1) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        message.channel.send(`Arguments: ${args}`);
	},
};
