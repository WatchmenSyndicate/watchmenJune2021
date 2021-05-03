module.exports = {
    name: 'find',
    execute: async(client, message, args) => {
     const ary = [ 'some tutorial1 https://youtube.com/watch?v=xxxxxxx', 'some tutorial2 https://youtube.com/watch?v=xxxxxxx', '....' ]; // add as much as you want
     const arg = args.join(' ');
     for(let stuff in ary) {
       if(ary[stuff].includes(arg)) { message.channel.send(ary[stuff]) }
     }
   }
 }