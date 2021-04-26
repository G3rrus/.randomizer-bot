exports.name = 'ready';
exports.fnc = function(client) {
	console.log(`Ready! Logged in as ${client.user.tag}`);
	return;
};
