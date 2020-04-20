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


// SCAN
    var imagekasp = "https://img.icons8.com/color/2x/kaspersky.png";
    //let args = message.content.split(" ")
    args.shift()
    message.delete().catch(O_o => { });
    if (args.length > 0) {
      var embed = new Discord.RichEmbed()
        .setTitle(`Kaspersky scan:`, message.guild.iconURL)
        .setDescription(" ")
        .setColor(color)
        .addField("Result link:", `[${args.join(' ')}](https://www.siteadvisor.com/sitereport.html?url=${args.join('%20')})`, true)
        //.addField("Link:",`https://www.qwant.com/#q=` + args.join('%20'))
        .setFooter(nameb + vo)
        //.setThumbnail(bot.user.displayAvatarURL);
        .setThumbnail(imagekasp)
        .setTimestamp();
      message.channel.send(embed)
    } else {
      message.channel.send("Parameter [object] please");
    }





}

module.exports.help = {
    name: "scan"
}