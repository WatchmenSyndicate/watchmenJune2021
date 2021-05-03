const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'wolfe',
  description: 'Asks a question and let the bot determine your fate :sparkler:',
  async execute(client, message, args) {
    if (!args[0]) return message.channel.send('Please ask a full question!'); // return if no question is commenced
    const replies = ['Yes.', 'Skål.', 'No.', 'Dunno..', 'Up to you bro✌', 'Brb bro.',  'Never. Lol.', 'Definitely.', 'Ask again later man..']; // random responses

    const result = Math.floor(Math.random() * replies.length); // Get a random respons for the array
    const question = args.join(' '); // join the args(Array<string>) to a question string
    // check permissions for embed
    if (message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
      const embed = new MessageEmbed() // create embed 
        .setAuthor('')
        .setColor('ORANGE').addField('Question:', question)
        .addField('Wolfe says:', replies[result]);
      await message.channel.send(embed); // send embed message
    } else {
      await message.channel.send(`**Question:**\n${question}\n**Answer:**\n${replies[result]}`); // no permissins so bot will default to a raw message
    }
  },
};