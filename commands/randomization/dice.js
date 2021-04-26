const fncRandom = require('../../functions/getRndInt.js');

exports.name = 'dice-roll';
exports.description = 'Rolls a n-sides dice and tells you what it landed on.';
exports.aliases = ['dice', 'roll'];
exports.usage = '[Command usage #1]\n[Command usage #2]';
exports.cooldown = 5;

const cmdFnc = function(message, args) {
	const max = parseInt(args[0], 10);
	if (isNaN(max) || max < 1 || max > Number.MAX_SAFE_INTEGER) {
		return message.channel.send('Sorry that is not a valid parameter for a dice roll!');
	}
	return message.channel.send(`The dice landed on: ${fncRandom.getRndInteger(1, max)}`);
};
exports.cmdFnc = cmdFnc;
