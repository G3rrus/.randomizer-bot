const fncRandom = require('../../functions/getRndInt.js');

exports.name = 'choice-randomizer';
exports.description = 'Tell you one random selection out of all entries you give to it.';
exports.aliases = ['choice', 'random'];
exports.usage = '[Command usage #1]\n[Command usage #2]';
exports.cooldown = 5;

const cmdFnc = function(message, args) {
	if (!args) return message.channel.send('No parameter was given!');

	if (args.length < 2) {
		return message.channel.send('Not enough entries to make a random choice!');
	}
	return message.channel.send(`The choice is: ${args[fncRandom.getRndInteger(0, args.length - 1)]}`);
};
exports.cmdFnc = cmdFnc;
