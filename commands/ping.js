const Discord = require('discord.js')

module.exports = {
    name: 'ping',
    description: "sends to ping link!",
    async execute(client, message, args){

        const test = new Discord.MessageEmbed()
        .setDescription(`🏓\`${Date.now() - message.createdTimestamp} ms\``);

            message.channel.send(test)
    }
} 