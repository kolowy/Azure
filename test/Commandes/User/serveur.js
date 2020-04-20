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


    // SERVER INFO

    message.delete().catch(O_o => { });
    var afkTimer = message.channel.guild.afkTimeout / 60;
    var owner = message.channel.guild.members.get(message.channel.guild.ownerID);
    let connectés = message.guild.members.filter(ppl => ppl.presence.status !== 'offline' && !ppl.user.bot).size;
    let bots = message.guild.members.filter(member => member.user.bot).size;
    message.channel.createInvite()
      .then(invite => {
        var embed = new Discord.RichEmbed()
          .setAuthor(`Iinformations about ${message.channel.guild.name === null ? `` : ''}${message.channel.guild.name !== null ? message.channel.guild.name : ''}`, `${message.channel.guild.iconURL === null ? `` : ''}${message.channel.guild.iconURL !== null ? message.channel.guild.iconURL : ''}`)
          .setDescription(" ")
          .addField("Name:", message.guild.name, true)
          .addField("ID:", message.guild.id, true)
          .addField("Owner:", message.guild.owner.user, true)
          .addField("Members:", message.guild.memberCount, true)
          .addField("Bots:", bots, true)
          .addField("Online:", connectés, true)
          .addField("Saloons:", message.guild.channels.size, true)
          .addField("Roles:", message.guild.roles.size, true)
          .addField(`Server localization:`, `${message.channel.guild.region}`, true)
          .addField("Creation date:", `The ${moment(message.guild.createdAt).format("DD/MM/YYYY hh:mm")}`, true)
          .addField("You join:", `The ${moment(message.member.joinedAt).format("DD/MM/YYYY hh:mm")}`, true)
          .addField("Bot join:", `The ${moment(message.guild.me.joinedAt).format("DD/MM/YYYY hh:mm")}`, true)
          .addField(`Verificatin level:`, `${message.channel.guild.verificationLevel === null ? `` : ''}${message.channel.guild.verificationLevel !== null ? message.channel.guild.verificationLevel : ''}`, true)
          .addField(`Time before AFK:`, `${afkTimer === null ? `` : ''}${afkTimer !== null ? afkTimer + 'min' : ''}`, true)
          //.addField(`AFK Channel:`, `${message.channel.guild.afkChannelID === null ? `` : ''}${message.channel.guild.afkChannelID !== null ? message.channel.guild.afkChannelID : ''}`)
          .addField("Link:", "https://discord.gg/" + `${invite.code}`, true)
          .addField(`Roles:`, `${message.channel.guild.roles.map(c => c.name).join(', ')}`)
          .setColor(color)
          .setFooter(nameb + vo)
          .setTimestamp();
        message.channel.send(embed)
      })





}

module.exports.help = {
    name: "server"
}