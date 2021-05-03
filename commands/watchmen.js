module.exports = {
    name: 'watchmen',
    description: "sends to watchmen link!",
    execute(client, message, args){
            message.channel.send('https://en.wikipedia.org/wiki/Watchman_(law_enforcement)');
    }
}