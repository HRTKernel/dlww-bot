const fs = require('fs');
const Discord = require('discord.js');
const { 
	prefix, token, messagedecklist, sixsamlink 
	} = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	client.user.setActivity("Yu-Gi-Oh! Duel Links")
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'six-sam') {
        message.channel.send(`${message.author}, ${messagedecklist}`);
		message.channel.send(`${sixsamlink}`);
    }
});

client.login(token)