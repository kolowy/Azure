const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    //if(!message.guild.member(message.member).hasPermission("ADMINISTRATOR")) return message.channel.send("T'as pas la permission connard");

    let botmsg = args.join(" ");
    message.delete().catch();
    message.channel.send(botmsg)

    
};

module.exports.help = {
    name: "bot"
}