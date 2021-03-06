// import of command prefix of YOUR choice
const { prefix } = require('../../config.json');
const fncRandom = require('../../functions/getRndInt.js');

exports.name = 'coin-flip';
exports.description = 'Flips a coin and tells you if it landed heads or tails.';
exports.aliases = ['coin', 'flip'];
exports.usage = `${prefix}coin-flip`;
exports.cooldown = 5;

const coin = ['Heads', 'Tails'];
const cmdFnc = function(message) {
	return message.channel.send(`The coin landed on: ${coin[fncRandom.getRndInteger(0, 1)]}`);
};
exports.cmdFnc = cmdFnc;
