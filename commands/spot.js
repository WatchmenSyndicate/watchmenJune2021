const Discord = require('discord.js');
const fs = require('fs');
const convert = require('parse-ms')

module.exports = {
    name: "spot",
    async execute(client, message, args) {
        let user;
        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else {
            user = message.author;
        }
    
        let status;
        if (user.presence.activities.length === 1) status = user.presence.activities[0];
        else if (user.presence.activities.length > 1) status = user.presence.activities[1];
    
        if (user.presence.activities.length === 0 || status.name !== "Spotify" && status.type !== "LISTENING") {
            const nostatus = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setDescription('You dont have any spotify status currently activated!')
            .setFooter(client.user.username, client.user.avatarURL())
            return message.channel.send(nostatus);
        }
    
        if (status !== null && status.type === "LISTENING" && status.name === "Spotify" && status.assets !== null) {
            let image = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`,
                url = `https:/open.spotify.com/track/${status.syncID}`,
                name = status.details,
                artist = status.state,
                album = status.assets.largeText,
                timeStart = status.timestamps.start,
                timeEnd = status.timestamps.end,
                timeConvert = convert(timeEnd - timeStart);
    
            let minutes = timeConvert.minutes < 10 ? `0${timeConvert.minutes}` : timeConvert.minutes;
            let seconds = timeConvert.seconds < 10 ? `0${timeConvert.seconds}` : timeConvert.seconds;
            let time = `${minutes}:${seconds}`;
    
            const information = new Discord.MessageEmbed()
            .setAuthor("Información de la pista de Spotify", client.user.avatarURL())
            .setColor(0x1ED768)
            .setThumbnail(image)
            .addField("Nombre:", name, true)
            .addField("Álbum:", album, true)
            .addField("Artista:", artist, true)
            .addField("Duración:", time, false)
            .addField("Escuchando ahora en Spotify!", `[\`${artist} - ${name}\`](${url})`, false)
            .setFooter(client.user.username, client.user.avatarURL())
            return message.channel.send(information)
            }
        }
    }