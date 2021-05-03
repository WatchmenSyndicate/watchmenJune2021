const { Client, Message, MessageEmbed } = require("discord.js");
const translate = require("@iamtraction/google-translate"); //npm i @iamtraction/google-translate
module.exports = {
    name: "translate",
    Aliases: ['trans'],
    description: "translate to de",
    
    async execute(client, message, args) {
 
        const query = args.join(" ");
        if (!query) return message.reply("Pls spec a text");
        const translated = await translate(query, (query, { to: "en" })); //change lang prefix here for ex. en for english
        message.channel.send(translated.text);
 
 
 
 
 
    }
 
}