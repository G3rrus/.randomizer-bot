// import of command prefix of YOUR choice
const { prefix } = require('../../config.json');
const fncRandom = require('../../functions/getRndInt.js');

exports.name = 'dice-roll';
exports.description = 'Rolls a n-sided dice.';
exports.aliases = ['dice', 'roll'];
exports.usage = `${prefix}dice-roll number`;
exports.cooldown = 5;

const cmdFnc = function(message, args) {
	if (!args) return message.channel.send(`No parameter was given! See \`${prefix}args-info ${prefix}dice-roll\` for more information.`);

	const max = parseInt(args[0], 10);
	if (isNaN(max) || max < 1 || max > Number.MAX_SAFE_INTEGER) {
		return message.channel.send(`Sorry that is not a valid parameter for a dice roll! See \`${prefix}args-info ${prefix}dice-roll\` for more information.`);
	}
	return message.channel.send(`The dice landed on: ${fncRandom.getRndInteger(1, max)}`);
};
exports.cmdFnc = cmdFnc;
