module.exports = {
    name: 'leaders',
    aliases: ['Leaders', 'leader', 'hq'],
    permissions: [],
    descriptions: 'Have a chat with us!',
    async execute(client, message, args, Discord){
        const channel = await message.guild.channels.create(`the 🎪: ${message.author.tag}`);
        channel.setParent('632902402944663563');

        channel.updateOverwrite(message.guild.id, {
            SEND_MESSAGE: false,
            VIEW_CHANNEL: false,
        });
        channel.updateOverwrite(message.author, {
            SEND_MESSAGE: true,
            VIEW_CHANNEL: true,
        });

        const reactionMessage = await channel.send('Nice that you contact us. What do you have on your mind?');

        try{

            await reactionMessage.react('✌');
            await reactionMessage.react('👋');
            }catch (err) {
            channel.send('error sending emojis!');
            throw err; 
        }
        
       const collector = reactionMessage.createReactionCollector( 
        (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission('ADMINISTRATOR'),
        { dispose: true }
       
       );

       collector.on('collect', (reaction, user) => {
           switch(reaction.emoji.name) {
               case '✌':
               channel.updateOverwrite(message.author, { SEND_MESSAGES: false});
               break;
          case '👋':
              channel.send('Deleting this channel in 5 seconds!');
              setTimeout(() => channel.delete(), 5000);
              break;     
           }
       });

       message.channel.send(`We will be right with you! ${channel}`).then((msg) => {
           setTimeout(() => msg.delete(), 7000);
           setTimeout(() => message.delete(), 3000);
       }).catch((err) =>  {
           throw err;
       })

    },
};