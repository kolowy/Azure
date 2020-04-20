const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    // CLEAR
    if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
      return message.channel.send("You cant delete messages!");
    //let args = message.content.split(" ").slice(1);
    if (!args[0]) return message.channel.send("Number of messages please!")
    if (args == "all") {
      message.channel.fetchMessages()
        .then(function (list) {
          message.channel.bulkDelete(list);
          let reportEmbed = new Discord.RichEmbed()
            .setTitle("Clear:", message.guild.iconURL)
            .setDescription(" ")
            .setColor(color)
            .addField(`All messages has succesfull deleted`, `by ${message.author}`)
            .setFooter(nameb + vo)
            .setTimestamp()
          //.addField("Reason", `${args[1]}`);
          message.channel.send(reportEmbed)
        }, function (err) { message.channel.send("ERROR: ERROR CLEARING CHANNEL.") })
    } else {
      if (isNaN(args)) return message.channel.send('The amount parameter is not a number!'); // Checks if the `amount` parameter is a number. If not, the command throws an error
      if (args > 100) {
        message.channel.send("100 is the maximum or use tje \"all\".")
      } else {
        message.delete().catch(O_o => { });
        message.channel.bulkDelete(args[0]).then(() => {
          let reportEmbed = new Discord.RichEmbed()
            .setTitle("Clear:", message.guild.iconURL)
            .setDescription(" ")
            .setColor(color)
            .addField(`${args[0]} messages has succesfull deleted`, `by ${message.author}`)
            .setFooter(nameb + vo)
            .setTimestamp()
          //.addField("Reason", `${args[1]}`);
          message.channel.send(reportEmbed)
        })
      }
    }


  if (message.content === prefix + 'delete') {
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
      message.channel.fetchMessages()
        .then(function (list) {
          message.channel.bulkDelete(list);
        }, function (err) { message.channel.send("ERROR: ERROR CLEARING CHANNEL.") })
    }
  }

}

module.exports.help = {
    name: "clear"
}