const pagination = require('discord.js-pagination')
const Discord = require('discord.js')

module.exports = {
    name: 'helpinfo',
    aliases: ['info'], 
    description: 'more adv. help command',

     execute (client, message, args) {

        const BotInfo = new Discord.MessageEmbed()
        .setColor(0x5140b0)                               
        .setTitle('🤖 Watchmen Syndicate™ Bot Info. ')
        .addField('prefix `-`' , 'Type a minus sign infront of a name: `-`') //do a , to make it undefined and more more text
       // .setfooter or.addField('This bot was made by 🦧',  message.guild.iconURL()); (havent figured this one out yet)
        .addField('**Pages**', '`1.Bot Info🤖` `2.INFO ℹ ` `3.FUN 🤭` ')
        .addField('**Navigation Help**', 'Use the arrows below to look through the pages!' )
      
       
       

        const Information = new Discord.MessageEmbed()
        .setColor(0xaf46a6)                 
        .setTitle('INFO ℹ ')
        .addField('`watchmen`', 'The Origins of Watchmen Syndicate™')
        .addField('`vpn`', 'Invitation to Watchmen Oracle VPN Server')
        .addField('`sc `', ' Link to Watchmen 12th Social Club')
        .addField('`recruit`', 'Makes a vote in the 12th-voting room ')
       // .addField('`report `', 'Report an issue and we look in to it ASAP')
        .addField('`suggest`', 'Make a suggestion for our Discord servers or what you have in mind')
        .addField('`servers`', ' Watchmen servers and members. It counts bots..!')
        .addField('`userinfo`', 'Shows info about a user on Discord')
        .addField('`yt`', 'Watchmen Youtube channel!')
        .addField('`lord-simp`', 'DeadEyeWolfe youtube channel')
        .addField('`marty`', 'THEOFFICIALMARTY youtube channel ')
      //  .addField('`ig  `', 'Link to Watchmen Instagram')
       // .addField('`insta `', 'Shows a users IG account')
       // .addField('`userinfo `', 'Shows the roles a @user have on our Watchmen Discord servers')
        .addField('`translate`', 'Write in your own language and it translates to English')
        .addField('`timezones`', 'Shows you Timezones around the world')
        .addField('`weather`', 'Shows you the weather around the world')
        .addField('`covid`', 'World covid statistics')
        .addField('`math`', 'Calculator. Lol')
        .addField('`remind`', 'A reminder on discord')
        .addField('`wiki`', 'Search on Wikipedia from Discord')
        .addField('`google 🦍💨`', 'Search on google directly from Discord')
        .addField('`warn`', 'Warn a user and sends a pm')
        .addField('`ping`', 'Shows you bot ping ')

       
       
        const fun = new Discord.MessageEmbed()
        .setColor(0xd44747)                           
        .setTitle('FUN 🤭 ')
        .addField('`joke`', 'Shows you random jokes')
        .addField('`illegal`', 'Make stuff illegal with ex president Mr.Trump')
        .addField('`hack`', 'Scare a friend with a dummy hack')
        .addField('`hug`', 'Give @user a hug')
        .addField('`animesearch`', 'Get info about anime movies and series')
        .addField('`anime`', 'Get more info about anime movie/series')
        .addField('`jumble`', 'Figure out the correct word')
        .addField('`spotify`', 'Search for your favorite song or artist')
        .addField('`rps`', 'Play rock paper scissor')
        .addField('`wolfe`', 'Ask Wolfe a question and he will respond the best he can...')
        .addField('`tictactoe`', 'Play tictactoe with a friend')
       // .addField('`ìmage`', 'Search whatever and it shows images from Google')
        .addField('`avatar`', 'check out yours or your friends avatar ')
        .addField('`smug`', 'Shows you random anime images')

        
        

        const pages = [
            BotInfo,
            Information,
            fun,
            
        ]
       
        

        

        const emojiList = ['⏪', '⏩']

        const timeout = '100000000'

        pagination(message, pages, emojiList, timeout)
        

    }
}