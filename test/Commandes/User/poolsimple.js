const Discord = require("discord.js");

const { version } = require("discord.js"); // DiscordJS.

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

    // POOL SIMPLE

if (message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) {
    //let arg = message.content.split(" ").slice(1);
    let echo = arg.join(" ")
    if (arg.length > 0) {
        message.delete().catch(O_o => { });
        var embed = new Discord.RichEmbed()
        .setAuthor("Pool:", message.guild.iconURL)
        .setDescription(" ")
        .addField(`React for participate.`, `By ${message.author}, ` + echo)
        .setColor(color)
        .setFooter(nameb + vo)
        .setTimestamp();
        message.channel.send(embed)
        .then(async function (message) {
          await message.react('✅')
          await message.react('❔')
          await message.react('❎')
        })
        .catch(console.log);
    } else {
      message.channel.send("Specify the [object] please.");
    }
} else {
    return message.reply("You cant create pool.")
}





}

module.exports.help = {
    name: "pool"
}