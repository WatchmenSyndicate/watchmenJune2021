module.exports = {
    name: 'gin',
    aliases: ['g', 'gintonic'], 
    description: "sends to avatar link!",
    execute(client, message, args){
        message.channel.send('https://www.twitch.tv/gintonic_tv');

            }
    }