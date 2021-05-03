const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
    name: "uptime",
    execute: async(client, message, args, Discord) => {
        let id = '539862191445114880';
        if(message.author.id !== id){
            return;
        } else {
            let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;

    let uptimeE = new Discord.MessageEmbed()
    .setTitle("UPTIME")
    .setColor("WHITE")
    .setDescription(`\nDay(S) Online: ${days}\n\nHour(S) Online: ${hours}\n\nMinute(S) Online: ${minutes}\n\nSecond(S) Online: ${seconds}`)
     .setFooter(`Requested By : ${message.author.username}`, message.author.displayAvatarURL({
                    dynamic: true
                }))
    message.channel.send(uptimeE)
    return;
        }
    }
}