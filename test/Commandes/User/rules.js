require('dotenv').config() // Protect the token.
const { version } = require("discord.js"); // DiscordJS.
const Discord = require('discord.js'); // DiscordJS.
const antispam = require('discord-anti-spam'); // Requiring this module for the anti-spam.
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
    // RULES
    if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
    return message.channel.send("You cant use this !");

  message.delete().catch(O_o => { });

  var embed = new Discord.RichEmbed()
    .setAuthor("Rules 1/3", message.guild.iconURL)
    .setDescription(" ")
    .addField(`1- `, "► Language and writing: You are asked to make efforts on syntax, spelling and grammar. As on any forum, writing in capital letters is considered screaming. The SMS language, meanwhile, is simply PROHIBITED.")
    .addField(`1-1`, "➢ The writing must remain legible for all without having to quote the message. In case of repetition, the post will be deleted.")
    .addField(`1-2`, `➢ Before posting your message, use the "spell check" function to re-read.`)
    .addField(`2-`, `► Defamation: It is forbidden to insult other members, in any way, or to make racist and / or homophobic remarks.`)
    .addField(`2-1`, `➢ In case of different between you, we ask you to solve your problems in MP, however the insults are not tolerated either.`)
    .addField(`3-`, `► Taboo topics: It is forbidden to talk about politics or religion in order to avoid discomfort and controversy.`)
    .addField(`4-`, `► Flood: The flood is to be moderated, the messages do not mean anything, being repetitive or totally out of context (personal delirium) will be considered as flood. To avoid overloading discussions unnecessarily, it is forbidden to post several times in a row in the same topic.`)
    .addField(`4-1`, `➢ Use the **edit** function to add something to your post or correct mistakes. This function is available on the message once posted, to the far right.`)
    .addField(`5-`, `► Avatars: They must follow the rules of decorum mentioned above. For any item recovery of ${message.channel.guild.name}, please request prior permission.`)
    .addField(`5-1`, `➢ Remember that this forum is frequented by young players, so please take it into account when choosing your avatars.`)
    .setColor(color)
    .setFooter(nameb + vo)
  message.channel.send(embed)

  var embed = new Discord.RichEmbed()
    .setAuthor("Rules 2/3", message.guild.iconURL)
    .setDescription(" ")
    .addField(`6- `, `► Advertising: Any post created to advertise a site external to ${message.channel.guild.name} will be automatically censored and then closed and / or deleted.`)
    .addField(`6-1`, "➢ A Discord account created solely for this purpose may be banned without further explanation.")
    .addField(`7-`, `► Spam: Spam is forbidden for any reason whatsoever, all over the server.`)
    .addField(`7-1`, `➢ An account created solely for this purpose may be banned without further explanation.`)
    .addField(`8-`, `► Donation or resale: It is totally forbidden to offer a gift of account or a resale for any reason.`)
    .addField(`9-`, `► You have been warned: Any registration and / or participation in this server implies that you have consulted these rules, therefore any breach of these rules will be followed by sanctions.`)
    .addField(`9-1`, `➢ The post concerned can be deleted without further explanation than those given here.`)
    .addField(`10-`, `► Sanctions: They can go from the warning to the ban of the server, one or the other for a duration of several days to several weeks or to the final banishment according to the gravity or the recidivism of the fault.`)
    .addField(`11-`, `► Repetition: Several warnings will result in a temporary or permanent ban. In case of temporary ban, the creation of another account or any connection attempt by a devious means will result in a permanent ban.`)
    .addField(`12-`, `► Disagreement: If you have a problem with a moderation that seems unfair to you, contact the admin directly by DM.`)
    .setColor(color)
    .setFooter(nameb + vo)
  message.channel.send(embed)

  var embed = new Discord.RichEmbed()
    .setAuthor("Rules 3/3", message.guild.iconURL)
    .setDescription(" ")
    .addField(`Warning: this regulation may be designed to evolve over time`, `➢➢ while remaining on this server, you accept the conditions of use without restraint`)
    .setColor(color)
    .setFooter(nameb + vo)
    .setTimestamp()
  message.channel.send(embed)




  
}

module.exports.help = {
    name: "rules"
}