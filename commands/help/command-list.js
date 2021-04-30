// import of command prefix of YOUR choice
const { prefix } = require('../../config.json');
const fncArgsInfo = require('./args-info.js');

exports.name = 'command-list';
exports.description = 'Returns a list of all commands';
exports.aliases = ['commands', 'list'];
exports.usage = `${prefix}command-list`;
exports.cooldown = 2;

const cmdFnc = function(message, _1, commands) {
	for (const command of commands) {
		fncArgsInfo.cmdFnc(message, [`${prefix}${command[0]}`], commands);
	}
};
exports.cmdFnc = cmdFnc;
