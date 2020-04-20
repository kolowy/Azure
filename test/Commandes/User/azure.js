const Discord = require("discord.js");
require('dotenv').config() // Protect the token.
const { version } = require("discord.js"); // DiscordJS.
//const Discord = require('discord.js'); // DiscordJS.
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
// ABOUT

    message.delete().catch(O_o => { });
    function getUptime() {
      let sec_num = parseInt(process.uptime(), 10);

      let days = Math.floor(sec_num / 86400),
        hours = Math.floor((sec_num - (days * 86400)) / 3600),
        minutes = Math.floor((sec_num - (days * 86400) - (hours * 3600)) / 60),
        seconds = sec_num - (days * 86400) - (hours * 3600) - (minutes * 60);

      if (days < 10) days = "0" + days;
      if (hours < 10) hours = "0" + hours;
      if (minutes < 10) minutes = "0" + minutes;
      if (seconds < 10) seconds = "0" + seconds;

      let time = "";

      if (parseInt(days, 10) > 1) time += days + 'd';
      if (parseInt(hours, 10) > 1) time += hours + 'h ';
      if (parseInt(minutes, 10) > 1) time += minutes + 'min ';
      if (parseInt(seconds, 10) > 1) time += seconds + 'sec ';

      return time;
    }
    var embed = new Discord.RichEmbed()
      .setTitle("Informations about Azure", message.guild.iconURL)
      .setDescription(" ")
      .setColor(color)
      .addField("Introduction:", "Azure by O3IL.")
      .addField("Servers: ", `${bot.guilds.size.toLocaleString()}`, true)
      .addField("Saloons: ", `${bot.channels.size}`, true)
      .addField("Users: ", `${getCountUsers()}`, true)
      .addField("API latency: ", `${Math.round(bot.ping)}ms`, true)
      .addField("Memory: ", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
      .addField("Online time: ", `${getUptime()}`, true)
      .addField("Discord.js: ", `${version}`, true)
      .addField("Azure:", vo, true)
      .addField("Create the:", `${moment(bot.user.createdAt).format("DD/MM/YYYY hh:mm")}`, true)
      .setFooter(nameb + vo)
      .setThumbnail(bot.user.displayAvatarURL)
      .setTimestamp();
    message.channel.send(embed)



}

module.exports.help = {
    name: "azure"
}