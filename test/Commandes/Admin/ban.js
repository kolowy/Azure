const Discord = require("discord.js");
const { version } = require("discord.js"); // DiscordJS.
const bot = new Discord.Client(); // Use "bot", not "client" because I'm!
const moment = require("moment"); // Requiring this module for time bot.
const weather = require('weather-js'); // Make sure you call the packages you install.
const responseObject = { "hello": "Hello !!! 👋 ", "bot": "It's me 😎 ", "hi": "Hi 🎉 ", "bye": "Bye-bye 😘 ", "good": "Good good good ! 😜 ", "why": "Oh yes, why ?! 🤔 ", "GG": "GG! 🎊 ", "test": "✅", "moon": "Moon -> 🌕", "tl": "TL is just amazing ❤", "fj": "**It's my father** 🤖" }; // Require for little AI for get he world!!!
const vo = ("V1.0.0.α"); // Version of the TL (don't miss change this).
const color = ("#007fff"); // Require to update for have white, before black, now green (Minecraft color [tl-logo]).
const nameb = ("Azure-Nightly | "); // Change for: 🎅🎃🎉
const request = require('request');
const mcPort = 25565; // Your MC server port (25565 is the default)

module.exports.run = async(client, message, args) => {

// BAN

    //let args = message.content.split(" ").slice(1);
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    args.shift()
    if (message.guild.member(message.author).hasPermission("BAN_MEMBERS")) {
      if (rUser) {
        const member = message.guild.member(rUser);
        if (member) {
          if (rUser.id === message.author.id) {
            message.channel.send("You cant autoban.")
          } else {
            member.ban(args.join(' ')).then(() => {
              let reportEmbed = new Discord.RichEmbed()
                .setTitle("Ban", message.guild.iconURL)
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
              message.reply('I cant ban this user!');
              console.error(err);
            });
          }
        } else {
          message.reply('This user is not in the server!');
        }
      } else {
        message.reply('You don\'t have specify the user.');
      }
    } else {
      message.channel.send("You can't ban!")
    }

}

module.exports.help = {
    name: "ban"
}