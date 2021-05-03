const { Discord, Client, MessageEmbed } = require('discord.js') 
module.exports = {
  
  name: 'servers',
  description: 'List of servers',
  async execute(client, message, args, Discord) {
   let serverlist = ''
        client.guilds.cache.forEach((guild) => {
            serverlist = serverlist.concat( "** - **" + guild.name + "| ID: " + guild.id + `| Members:`+ guild.memberCount + "\n"  )
        })
    
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Servers using the Watchmen Bot 🤖 Bots included!`, '')
        .setDescription(serverlist)
        message.channel.send({embed});
  }
}
