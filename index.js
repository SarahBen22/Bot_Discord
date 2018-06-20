const Discord = require('discord.js')

const bot = new Discord.Client()

bot.on('message', function(message){

if (message.content === 'Chaton'){
  message.reply ('I <3 Cats!!!')
}

})

bot.on ('ready', function(){
bot.user.setGame('HelloKitty Online')

})


bot.on('guildMemberAdd', function(member) {
  member.guild.channels.find('name','général').send(`${member} est le/la bienvenu(e) dans cette conversation`)
})

setInterval(function(){

bot.channels.find("name", "général").send('@everyone Trop Mignon');

 }, 120000);

bot.login('TOKEN')
