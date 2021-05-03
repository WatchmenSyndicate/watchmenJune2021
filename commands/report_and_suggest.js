module.exports = {
    name: "report",
    aliases: ['mod', 'admin', 'suggest', 'idea'],
    //cooldown: 15,
    description: 'let users report an issue or make a suggestion',
    async execute(client, message, args, Discord){
        //the channel you want the bug-reports to be send to
        const channel = client.channels.cache.get('830149653512847381')

         //look if there is a bug specified
        const query = args.join(' ');
        if(!query) return message.reply('Please specify a suggestion')
        
         //create an embed for the bug report
        const reportEmbed = new Discord.MessageEmbed()
        .setTitle('New Suggestions!   Command: -suggest')
        .addField('Author', message.author.toString(), true)
        .addField('Server', message.guild.name, true)
        .addField('Suggestion', query)
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTimestamp()
       // channel.send(reportEmbed);

        //channel.send(embed).then((msg) => {
          
           
            channel.send(reportEmbed).then((msg) => {
                msg.react('✔');
                msg.react('✖');
                message.delete();
            }).catch((err) => {
                throw err;
            }); 


        
        
        //send the embed to the channel
        message.channel.send("**Your suggestion has been sent to suggestions-room in the Watchmen Syndicate™ server!**")
    }
}