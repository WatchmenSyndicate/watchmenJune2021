const covid = require('novelcovid')

module.exports = {
    name: 'covid',
    description: 'Covid-19 Statistics',

    execute: async(client, message, args, Discord) => {
        const covidStats = await covid.all()
        
        return message.channel.send(new Discord.MessageEmbed()
            .setTitle('😷 COVID-19 STATISTICS')
            .setColor("BLUE")
            .setFooter(`😷𝗖𝗢𝗩𝗜𝗗-𝟭𝟵 Stay safe!`)
            .addFields(
                { name: `🦠 Cases`, value: covidStats.cases.toLocaleString(), inline: true},
                { name: `🦠 Cases Today`, value: covidStats.todayCases.toLocaleString(), inline: true},
                { name: `🦠 Deaths`, value: covidStats.deaths.toLocaleString(), inline: true},
                { name: `🦠 Deaths Today`, value: covidStats.todayDeaths.toLocaleString(), inline: true},
                { name: `🦠 Recovered`, value: covidStats.recovered.toLocaleString(), inline: true},
                { name: `🦠 Recovered Today`, value: covidStats.todayRecovered.toLocaleString(), inline: true},
                { name: `🦠 Active Cases`, value: covidStats.active.toLocaleString(), inline: true},
                { name: `🦠 In Critical Condition`, value: covidStats.critical.toLocaleString(), inline: true},
                { name: `🦠 Tested`, value: covidStats.tests.toLocaleString(), inline: true}
            )
        )
    }
}