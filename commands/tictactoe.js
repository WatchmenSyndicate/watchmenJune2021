const {tictactoe} = require('reconlx')
const { execute } = require('./Help')

module.exports = {
    name: 'tictactoe',
    Aliases: ['tic'],
    descriptions: 'tic tac toe command',

    async execute (client, message, args) {
        const member = message.mentions.members.first()
        if(!member) return message.channel.send('Please specify a user to play against!');

        new tictactoe({
            player_two: member,
            message: message
        })
    }
}