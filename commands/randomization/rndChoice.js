// import of command prefix of YOUR choice
const { prefix } = require('../../config.json');
const fncRandom = require('../../functions/getRndInt.js');

exports.name = 'choice-randomizer';
exports.description = 'Picks one random selection out of all entries you give to it.';
exports.aliases = ['choice', 'random'];
exports.usage = `${prefix}choice-randomizer choice1, choice2, choiceN`;
exports.cooldown = 5;

const cmdFnc = function(message, args) {
	if (!args) return message.channel.send(`No parameter was given! See \`${prefix}args-info ${prefix}choice-randomizer\` for more information.`);

	if (args.length < 2) {
		return message.channel.send(`Not enough entries to make a random choice! See \`${prefix}args-info ${prefix}choice-randomizer\` for more information.`);
	}
	return message.channel.send(`The choice is: ${args[fncRandom.getRndInteger(0, args.length - 1)]}`);
};
exports.cmdFnc = cmdFnc;
