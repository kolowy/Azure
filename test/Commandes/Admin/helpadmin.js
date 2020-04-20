const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    var embed = new Discord.RichEmbed()
    .setAuthor("Commands admin:", message.guild.iconURL)
    .setDescription(" ")
    .addField("!kick [username]", "kick l'utilisateur")
    .addField("!ban [username]", "ban l'utilisateur")
    .addField("!addrole [ID du role]", "ajoute le role à l'utilisateur (en amélioration)")

    .setColor(`#0099ff`)
    .setTimestamp();
  message.channel.send(embed)
}


module.exports.help = {
    name: "helpadmin"
}