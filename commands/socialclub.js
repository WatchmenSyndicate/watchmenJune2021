module.exports = {
    name: 'sc',
    description: "sends to sc link!",
    execute(client, message, args){

            if(message.member.roles.cache.has('632884198545555456')){
                message.channel.send('https://socialclub.rockstargames.com/crew/watchmen_12th')
           
            } else {
                message.channel.send('You cant use this command sweety 🤪');
            }


    }
}