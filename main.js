const Discord = require ('discord.js');

const bot = new Discord.Client();

const { config } = require('dotenv');
require('dotenv').config();

const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const mongoose = require('mongoose');



client.on('ready', () =>{

  //client.user.setActivity(`${client.users.size} RDO2`); Dont use this atm!


  //client.user.setActivity(`${client.guilds.cache.map(s => s.memberCount).reduce((a, b) => a + b)} users`, { type: 'WATCHING' }).catch(console.error);

//(This is to put the commands in a folders)
  //for (const folder of commandFolders) {
    //const commandFiles = readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    //for (const file of commandFiles) {
      //const command = require(`./commands/${folder}/${file}`);
      //client.command.set(command.name, command);
  //  }
  //}
  
  //client.on('message', async (message) => {
    
  //})



  
    
  const arrayOfStatus = [
       // `Carpe Diem 🌞  `,
        `Over ${client.guilds.cache.size} servers! `,
      //  `Happy Campers ☯ ☮ 🦜 🎮`,

      `Watchmen Synd™`,

      //`Hakuna matata 🦧`,  
        
       // `Wolfe. Skål! `, 
        `-help and -info  `,   
        //`Bot 🤖 prefix (-) `          
         `${client.guilds.cache.map(s => s.memberCount).reduce((a, b) => a + b)} Gamers. `,
       // `Dont worrie be happy! 🎶`
         
        
        //client.user.setActivity(`${client.guilds.cache.map(s => s.memberCount).reduce((a, b) => a + b)} users`, { type: 'WATCHING' }).catch(console.error);                                          
    ];

    let index = 0;
    setInterval(() => {
       if(index === arrayOfStatus.length) index = 0;
        const status = arrayOfStatus[index];
       
        client.user.setActivity(status, { type:'WATCHING'}).catch(console.error)

         

      index++;
    }, 45000)

   
  }) 



client.commands = new Discord.Collection();
client.events = new Discord.Collection();






//const commandFolders = readdirSync('./commands');  This I cant figure out atm!

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord)

    
    });

    mongoose.connect(process.env.MONGODB_SRV, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }).then(() => {
      console.log('Connected to the database!');
     }).catch((err) => {
       console.log(err);
     });




client.login(process.env.DISCORD_TOKEN);
