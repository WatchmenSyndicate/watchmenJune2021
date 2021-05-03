const { MessageEmbed } = require(`discord.js`);

module.exports = {
    name: 'guilds',
    async execute(client, message, args, Discord) {
        const Map = client.guilds.cache.sort((a, b) => b.memberCount - a.memberCount).first(10).map((guild) => {
            return guild.name
        }).join("\n")
        const embed = new MessageEmbed()
            .setTitle(`Top 10 servers`)
            .setDescription(Map)
            .setColor("RANDOM")
        message.channel.send(embed)
    }
}
