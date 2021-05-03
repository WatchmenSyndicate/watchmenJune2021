const { MessageEmbed } = require('discord.js');
const { add } = require('mathjs');

module.exports = {
    name: 'warn',
    description: 'Warns a user!',
    timeout : 1,
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    execute: async(client, message, args, Discord) => {
        let warnPermErr = new MessageEmbed()
        .setTitle("**User Permission Error!**")
        .setDescription("**Sorry, you don't have permissions to use this! ❌**")
            if(!message.channel.permissionsFor(message.member).has(['MANAGE_MESSAGES'])) return message.channel.send(warnPermErr);
    
            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if(!member) return message.reply("Please mention a valid member of this server");
        
            let reason = args.slice(1).join(' ');
            if(!reason) reason = "Spam or naughty behaviour. Lol ";
            
            member.send(`You have been warned by <${message.author.username}> for this reason: ${reason}`)
            .catch(error => message.channel.send(`Sorry <${message.author}> I couldn't n't warn because of : ${error}`));
            let warnEmbed = new MessageEmbed()
            .setTitle("User Warned ⛔")
            .setColor("GREEN")
            .addField("User:", `<@${member.user.id}>`, true)
            .addField(`Moderator:`, `${message.author}`, true)
            .addField(`Reason:`, `${reason}`)

            message.channel.send(warnEmbed)
            const channel = message.guild.channels.cache.find(c => c.id === '<logschannelid>') //sends this to a specific channel in an embed
            channel.send(
                new MessageEmbed()
                .setTitle("User Warned")
                .setColor("GREEN")
                .addField("User:", `<@${member.user.id}>`, true)
                .addField(`Moderator:`, `${message.author}`, true)
                .addField(`Reason:`, `${reason}`)
                .setFooter(message.guild.name, message.guild.iconURL())
                .setTimestamp()
            )
    }
}