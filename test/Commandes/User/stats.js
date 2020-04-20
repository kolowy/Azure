const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async(client, message, args) => {
    
    const membre = message.mentions.members.first() || message.member;
    
    var stats = new Discord.RichEmbed()
    .setAuthor(`Statistiques de l'utilisateur ${membre.user.tag}`, message.guild.iconURL)
    .setThumbnail(membre.user.displayAvatarURL)
    .addField("> ID", membre.id)
    .addField("Créé le", moment.utc(membre.user.createdAt).format("LL"))
    .addField("Jeu :", `${membre.user.presence.game ? `${membre.user.presence.game.name}` : "Aucun jeu"}`)
    .addField("Regoint le :", moment.utc(membre.joinedAt).format("LL"))
    .setFooter(`Informations de l'utilisateur ${membre.user.username}`)
    .setColor(`#0099ff`)
    .setTimestamp();
    message.channel.send(stats)

    /*message.channel.send({
        embed: {
            color: 0x000000,
            title: `Statistiques de l'utilisateur **${membre.user.tag}**`,
            thumbnail: {
                url: membre.user.displayAvatarURL()
            },

            footeur:{
                text: `Informations de l'utilisateur ${membre.user.username}`
            }

        }
    })*/

};

module.exports.help = {
    name: "stats"
}