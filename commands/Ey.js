module.exports = {
    name: 'ey',
    description: "this is a Ey command!",
    execute(client, message, args){
            message.channel.send('sup' );
    }
}