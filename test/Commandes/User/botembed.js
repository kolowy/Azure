const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    //if(!message.guild.member(message.member).hasPermission("ADMINISTRATOR")) return message.channel.send("T'as pas la permission connard");
    
    let botmsgembed = args.join(" ");
    message.delete().catch();

    var botembed = new Discord.RichEmbed()
    .setAuthor( `${message.member.user.tag}`, message.guild.iconURL)
    .setDescription(botmsgembed)
    .setFooter(`message de ${message.member.user.username}`)
    .setColor(`#0099ff`)
    .setTimestamp();
    message.channel.send(botembed)
    
};

module.exports.help = {
    name: "embed"
}