const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {


  // KICK

    //let args = message.content.split(" ").slice(1);
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    args.shift()
    if (message.guild.member(message.author).hasPermission("KICK_MEMBERS")) {
      if (rUser) {
        const member = message.guild.member(rUser)
        if (member) {
          if (rUser.id === message.author.id) {
            message.channel.send("You cant autokick.");
          } else {
            member.kick(args.join(' ')).then(() => {
              let reportEmbed = new Discord.RichEmbed()
                .setTitle("Kick", message.guild.iconURL)
                .setDescription(" ")
                .setColor(color)
                .addField("User:", `${rUser} with ID: ${rUser.id}`)
                .addField("By:", `${message.author} with ID: ${message.author.id}`)
                .addField("Reason:", args.join(' '))
                .addField("Channel:", message.channel)
                .addField("Date:", `${moment(message.createdAt).format("DD/MM/YYYY hh:mm")}`)
                .setFooter(nameb + vo)
                .setTimestamp()
              message.channel.send(reportEmbed);
              console.log(`kick ${user.tag} in ${message.channel.guild.name}`)
            }).catch(err => {
              message.reply('I cant kick this user...');
              console.error(err);
            });
          }
        } else {
          message.reply('This user is not in this server!');
        }
      } else {
        message.reply('You don\'t have specifiy the user.');
      }
    } else {
      message.channel.send("You can't kick!")
    }
  

}

module.exports.help = {
    name: "kick"
}