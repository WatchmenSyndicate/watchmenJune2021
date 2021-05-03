const Discord = require('discord.js');

module.exports = {
    name: '🔐┃12th-voting',
    aliases: ['recruit', 'r', 'v', 'vote' ],
    description: 'creates a suggestion!',     
    execute(client, message, args) {

        
            if (message.member.roles.cache.has('632884198545555456')) {
                const channel = message.guild.channels.cache.find(c => c.name === '🔐┃12th-voting');
                if (!channel) return message.channel.send('12th-voting channel does not exist!');
    
                let messageArgs = args.join(' ');
                const embed = new Discord.MessageEmbed()
                    .setColor('FADF2E')
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                    .setDescription(messageArgs);
    
                channel.send(embed).then((msg) => {
                    msg.react('👍');
                    msg.react('👎');
                    message.delete();
                }).catch((err) => {
                    throw err;
                });
    
            } else {
                message.channel.send('You cant send this command because you dont have the right permissions.');
            
            }
      
        }
            
        }

        
  
        