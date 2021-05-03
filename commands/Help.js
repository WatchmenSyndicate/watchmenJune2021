const Discord = require('discord.js')


module.exports = {
    name: 'hlp',
    aliases: ['hjelp', 'sos', 'fun', 'help', 'h'],  //| `image 📸`
    description: 'simple help command!',

     execute(client, message, args) {
       
       const help = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Prefix: `-`' )
      .setAuthor('Bot command List', message.author.displayAvatarURL())

        .addFields({
            name: 'Info ℹ and Fun stuff 🤭',
            value:'Type -info for bot explanations!',
        },
        {
            name: 'Info ℹ',
            value: '`watchmen` | `vpn` | `sc` | `recruit` | `suggest` | `servers` | `userinfo` | `remind` | `warn` | `translate` | `yt` | `lord-simp` | `marty` | `google` | `wiki` | `timezones` | `weather` | `covid` | `math` | `ping`',
        },
        
        
        {
           
          
            name: 'Fun 🤭',
            value: '`joke` | `hack` | `jumble` | `hug` | `animesearch` | `anime` | `spotify` | `wolfe` | `tictactoe` | `rps` | `smug` | `illegal` | `avatar`', 
        },)

        
    .setFooter('made by DeadEyeCom ', message.guild.iconURL());
            

        message.channel.send(help)

            }
    }