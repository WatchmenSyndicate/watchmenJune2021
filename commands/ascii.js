//Message a channel!

const Discord = require("discord.js");
const figlet = require("figlet");

module.exports = {
  name: 'ascii',

  async execute(client, message, args, Discord) {
 let p = args.join(" ")
figlet(p, function(err, data) {
    if (err) {
        message.channel.send('Something went wrong...');
        console.dir(err);
        return;
    }
    message.channel.send(`\`\`\`${data}\`\`\``)
});
  }
}