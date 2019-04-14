module.exports = {
	name: 'six-sam',
	description: 'six-sam deckliste',
	execute(message, args) {
		message.channel.send(`${message.author}, Hier ist deine Deckliste:`);
	},
};