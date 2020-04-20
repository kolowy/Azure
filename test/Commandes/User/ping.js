const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

 // PING
    message.delete().catch(O_o => { });
    var embed = new Discord.RichEmbed()
      .setTitle("Pong ! ", message.guild.iconURL)
      .setDescription(`The latency is ${Math.round(bot.ping)}ms. 🏓`)
      .setColor(color)
      .setFooter(nameb + vo)
      .setTimestamp();
    message.channel.send(embed)
    //message.channel.send(`pong in ` + `${message.createdTimestamp - Date.now()}` + `ms`);
  


}

module.exports.help = {
    name: "ping"
}