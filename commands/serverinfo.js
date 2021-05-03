const { Client, Message, MessageEmbed} = require('discord.js');

module.exports = {
    name: 'serverinfo',
    description: "sends server info",
    /**
     *@param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    execute: async(client, message, args, Discord) => {

        const embed = new MessageEmbed()
        .setTimestamp()
        .setTitle("**Server Information**")
        .setColor('RANDOM')
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .addField(`🎫 Name of server:`, message.guild.name, true)
        .addField(`🆔 of server`, message.guild.id, true)
        .addField(`👑 Owner of this server is`, message.guild.owner, true) 
        .addField(`🌎 Region of this server is`, message.guild.region, true)
        .addField(`👥 Member Count: ${message.guild.memberCount}`,)
        
       // .addField(`👥 No. of Members`, message.guild.members.cache.size, true)
        .addField(`🤖 No. of Bots:`, message.guild.members.cache.filter(member => member.user.bot).size, true)
        .addField(`🚶 Weights:`, message.guild.members.cache.filter(member => !member.user.bot).size, true)
        .addField(`😗 Emojis:`, message.guild.emojis.cache.size, true)
        .addField(`👻 Animated Emoji\'s:`,message.guild.emojis.cache.filter(emoji => emoji.animated).size,true )
        .addField(`💬 Total Text Channels:`, message.guild.channels.cache.filter(channel => channel.type === 'text').size, true)
        .addField(`🎤 Total Voice Channels:`, message.guild.channels.cache.filter(channel => channel.type === 'voice').size, true)
        .addField(`👔 Total Amount of Roles:`, message.guild.roles.cache.size, true)
        .setAuthor(`${message.guild.name}`)
        message.channel.send(embed);  
    }
}