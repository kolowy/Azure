//_____{REQUIRE}____________________________________________________________________________________________________________________________________________________________

//LET'S GO
require('dotenv').config() // Protect the token.
const { version } = require("discord.js"); // DiscordJS.
const Discord = require('discord.js'); // DiscordJS.
const antispam = require('discord-anti-spam'); // Requiring this module for the anti-spam.
const bot = new Discord.Client(); // Use "bot", not "client" because I'm!
const moment = require("moment"); // Requiring this module for time bot.
const weather = require('weather-js'); // Make sure you call the packages you install.
const responseObject = { "hello": "Hello !!! 👋 ", "bot": "It's me 😎 ", "hi": "Hi 🎉 ", "bye": "Bye-bye 😘 ", "good": "Good good good ! 😜 ", "why": "Oh yes, why ?! 🤔 ", "GG": "GG! 🎊 ", "test": "✅", "moon": "Moon -> 🌕", "tl": "TL is just amazing ❤", "fj": "**It's my father** 🤖" }; // Require for little AI for get he world!!!
const prefix = ("."); // Prefix and alway not "!" pls.
const vo = ("V1.0.0.α"); // Version of the TL (don't miss change this).
const color = ("#007fff"); // Require to update for have white, before black, now green (Minecraft color [tl-logo]).
const nameb = ("Azure-Nightly | "); // Change for: 🎅🎃🎉
const request = require('request');
const mcPort = 25565; // Your MC server port (25565 is the default)

//_____{START}______________________________________________________________________________________________________________________________________________________________

//START
bot.login(process.env.BOT_TOKEN) // Protect the token for protect the token for protect the token for protect the token for protect the token for protect the token...
  .catch(console.error); // Check errors for check errors for check errors for check errors for check errors for check errors for check errors for check errors....

//_____{BOT}________________________________________________________________________________________________________________________________________________________________

//STARTER
function setAvatar(bot) {
  const today = new Date();
  const day = today.getDate();
  const mounth = today.getMonth() + 1;
  if (day === 25 && mounth === 12) {
    bot.user.setAvatar('./avatar.png')
      .then(() => console.log('avatar uploated'))
      .catch(console.log)
  } else if ((day === 31 && mounth === 12) || (day === 1 && mounth === 1)) {
    bot.user.setAvatar('./avatar.png')
      .then(() => console.log('avatar uploated'))
      .catch(console.log)
  } else if (day === 25 && mounth === 07) {
    bot.user.setAvatar('./avatar.png')
      .then(() => console.log('avatar uploated'))
      .catch(console.log)
  } else if (day === 23 && mounth === 08) {
    bot.user.setAvatar('./avatar.png')
      .then(() => console.log('avatar uploated'))
      .catch(console.log)
  } else if (day >= 13 && day <= 23 && mounth === 5) {
    bot.user.setAvatar('./avatar.png')
      .then(() => console.log('avatar uploated'))
      .catch(console.log)
  } else {
    bot.user.setAvatar('./avatar.png')
      .then(() => console.log('avatar uploated'))
      .catch(console.log)
  }
}

function setPresence(bot) {
  const today = new Date();
  const day = today.getDate();
  const mounth = today.getMonth() + 1;
  if (day === 25 && mounth === 12) {
    bot.user.setPresence({ game: { name: `Joyeux Noel`, type: 'PLAYING' }, status: 'dnd' }) // Change to "do not distibute" for Christmas.
      .then(() => console.log('activity refresh'))
      .catch(console.log)
  } else if ((day === 31 && mounth === 12) || (day === 1 && mounth === 1)) {
    bot.user.setPresence({ game: { name: `Joyeuse nouvelle année`, type: 'PLAYING' }, status: 'online' }) // Change to "do not distibute" for Christmas.
      .then(() => console.log('activity refresh'))
      .catch(console.log)
  } else if (day === 25 && mounth === 07) {
    bot.user.setPresence({ game: { name: `Joyeux anniversaire Fj`, type: 'PLAYING' }, status: 'online' }) // Change to "do not distibute" for Christmas.
      .then(() => console.log('activity refresh'))
      .catch(console.log)
  } else if (day === 23 && mounth === 08) {
    bot.user.setPresence({ game: { name: `Horrible Halloween`, type: 'PLAYING' }, status: 'idle' }) // Change to "do not distibute" for Christmas.
      .then(() => console.log('activity refresh'))
      .catch(console.log)
  } else if (day >= 13 && day <= 23 && mounth === 5) {
    bot.user.setPresence({ game: { name: `C'est le festival du film de Cannes `, type: 'PLAYING' }, status: 'online' }) // Change to "do not distibute" for Christmas.
      .then(() => console.log('activity refresh'))
      .catch(console.log)
  } else {
    bot.user.setPresence({ game: { name: `.help | Use by ${getCountUsers()} users in ${bot.guilds.size} guilds.`, type: 'PLAYING' }, status: 'online' }) // Change to "do not distibute" for Christmas.
      .then(() => console.log('activity refresh'))
      .catch(console.log)
  }
}

function getCountUsers() {
  const users = new Map();
  bot.guilds.forEach(guild => {
    guild.members.forEach(member => {
      let isAlreadyRegister = users.get(member.id);

      if (!isAlreadyRegister) {
        users.set(member.id, true);
      }
    });
  });
  return users.size;
}

// START
bot.on('ready', () => {
  setAvatar(bot);
  setInterval(setAvatar, 3600000);
  setPresence(bot);
  setInterval(setPresence, 3600000);
  new antispam(bot, {
    warnBuffer: 3, // Maximum ammount of messages allowed to send in the interval time before getting warned.
    maxBuffer: 5, // Maximum amount of messages allowed to send in the interval time before getting banned.
    interval: 1000, // Amount of time in ms users can send the maxim amount of messages(maxBuffer) before getting banned. 
    warningMessage: "Stop spamming, after is the ban hammer!", // Message users receive when warned. (message starts with '@User, ' so you only need to input continue of it.) 
    banMessage: "Killing by the ban hammer, RIP!", // Message sent in chat when user is banned. (message starts with '@User, ' so you only need to input continue of it.) 
    maxDuplicatesWarning: 3,// Maximum amount of duplicate messages a user can send in a timespan before getting warned.
    maxDuplicatesBan: 7, // Maximum amount of duplicate messages a user can send in a timespan before getting banned.
    deleteMessagesAfterBanForPastDays: 1, // Deletes the message history of the banned user in x days.
    exemptRoles: ["Moderateur", "Owner", "Administrateur", "Helpeur"], // Name of roles (case sensitive) that are exempt from spam filter.
    exemptUsers: ["MoonBot#8213"] // The Discord tags of the users (e.g: MrAugu#9016) (case sensitive) that are exempt from spam filter.
  })
});

//HELLO
bot.on('guildMemberAdd', member => {
  // This event triggers when users joins the guild.
  member.send("Welcome in the server !") // Read this pls!!!
  setPresence(bot);
  console.log("New member")
});

bot.on('guildCreate', bot => {
  // This event triggers when bot join the guild.
  setPresence(bot);
  console.log("New guild")
});

//BYE
bot.on('guildMemberRemove', member => {
  // This event triggers when members leaves the guild.
  setPresence(bot);
  console.log("Bye member")
});

bot.on('guildDelete', bot => {
  // This event triggers when bot leave the guild.
  setPresence(bot);
  console.log("Bye guild")
});

//AI+KILL
bot.on('message', message => {

  // AUTO
  if (responseObject[message.content]) {
    message.channel.send(responseObject[message.content])
  }

});

//_____{ADMIN}______________________________________________________________________________________________________________________________________________________________

//CHECK
bot.on('message', message => {

  // KICK
  if (message.content.startsWith('.kick')) {
    let args = message.content.split(" ").slice(1);
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    args.shift()
    if (message.guild.member(message.author).hasPermission("KICK_MEMBERS")) {
      if (rUser) {
        const member = message.guild.member(rUser);
        if (member) {
          if (rUser.id === message.author.id) {
            message.channel.send("You cant autokick.")
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

  // BAN
  if (message.content.startsWith('.ban')) {
    let args = message.content.split(" ").slice(1);
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

  // RULES
  if (message.content === prefix + "rules") {
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

  // CLEAR
  if (message.content.startsWith(prefix + "clear")) {
    if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
      return message.channel.send("You cant delete messages!");
    let args = message.content.split(" ").slice(1);
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
  }

  if (message.content === prefix + 'delete') {
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
      message.channel.fetchMessages()
        .then(function (list) {
          message.channel.bulkDelete(list);
        }, function (err) { message.channel.send("ERROR: ERROR CLEARING CHANNEL.") })
    }
  }

  // REPORT
  if (message.content.startsWith(prefix + "report")) {
    let args = message.content.split(" ").slice(1);
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    args.shift()
    if (!rUser) return message.channel.send("Cant find user.");
    //let rreason = args.join(" ").slice(1);
    if (rUser.id === message.author.id) {
      message.channel.send("You cant autoreport.")
    } else {
      let reportEmbed = new Discord.RichEmbed()
        .setTitle("Report", message.guild.iconURL)
        .setDescription(" ")
        .setColor(color)
        .addField("User:", `${rUser} avec ID: ${rUser.id}`)
        .addField("By:", `${message.author} avec ID: ${message.author.id}`)
        .addField("Reason:", args.join(' '))
        .addField("Channel:", message.channel)
        .addField("Date:", `${moment(message.createdAt).format("DD/MM/YYYY hh:mm")}`)
        .setFooter(nameb + vo)
        .setTimestamp()
      //.addField("Reason", `${args[1]}`);
      message.delete().catch(O_o => { });
      message.channel.send(reportEmbed)
    }
  }

  // POOL SIMPLE
  if (message.content.startsWith(prefix + "pool")) {
    if (message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) {
      let arg = message.content.split(" ").slice(1);
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
});

//_____{PUBLIC}_____________________________________________________________________________________________________________________________________________________________

//CHECK
bot.on('message', message => {

  // HELP
  if (message.content === prefix + "help") {
    message.delete().catch(O_o => { });
    var embed = new Discord.RichEmbed()
      .setAuthor("Commands:", message.guild.iconURL)
      .setDescription(" ")
      .addField("$mc", "Informations sur le serveur Minecraft")
      .addField("$serveur", "Informations sur le serveur")
      .addField("$moi", "Informations sur vous")
      .addField("$ping", "Temps de latence entre le serveur et vous")
      .addField("$Ti'Bot", "Informations a props du bot")
      .addField("$report [@utilisateur] [raison]", "Report une personne")
      .setColor(color)
      .setFooter(nameb + vo)
      .setTimestamp();
    message.channel.send(embed)
  }

  if (message.content.startsWith('.mc')) {
    let arg = message.content.split(" ").slice(1);
    let echo = arg.join(" ")
    if (arg.length > 0) {
      message.delete().catch(O_o => { });
      var url = 'http://mcapi.us/server/status?ip=' + echo + '&port=' + mcPort;
      request(url, function (err, response, body) {
        if (err) {
          console.log(err);
          return message.channel.send('Error...');
        }
        body = JSON.parse(body);
        var status = '*The server is actually offline*';
        if (body.online) {
          status = 'The server is actulally online - ';
          if (body.players.now) {
            status += 'This is the number of players in this: **' + body.players.now + '**';
          } else {
            status += 'nothing play...';
          }
        }
        message.channel.send(status);
      });
    }
  }

  // SERVER INFO
  if (message.content === prefix + "server") {
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

  // ABOUT
  if (message.content === prefix + "Azure") {
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

  // PING
  if (message.content === prefix + "ping") {
    message.delete().catch(O_o => { });
    var embed = new Discord.RichEmbed()
      .setTitle("Pong ! ", message.guild.iconURL)
      .setDescription(`The latency is ${Math.round(bot.ping)}ms. 🏓`)
      .setColor(color)
      .setFooter(nameb + vo)
      .setTimestamp();
    message.channel.send(embed)
    //message.channel.send(`pong in ` + `${message.createdTimestamp - Date.now()}` + `ms`);
  }

  // MY
  if (message.content.startsWith(prefix + "my")) {
    message.delete().catch(O_o => { });
    var userCreateDate = message.author.createdAt.toString().split(" ");
    var msgauthor = message.author.id;
    var embed = new Discord.RichEmbed()
      .setTitle(`${message.author.username}` + "infos", message.guild.iconURL)
      .setDescription(" ")
      .setColor(color)
      .addField(`ID: `, msgauthor, true)
      .addField("Creation: ", userCreateDate[2] + ' ' + userCreateDate[1] + ' ' + userCreateDate[3])
      .addField("Avatar link:", message.author.displayAvatarURL)
      .setFooter(nameb + vo)
      //.setThumbnail(bot.user.displayAvatarURL);
      .setThumbnail(message.author.displayAvatarURL)
      .setTimestamp();
    message.channel.send(embed)
  }

  if (message.content === prefix + "server list") {
    message.delete().catch(O_o => { });
    var embed = new Discord.RichEmbed()
      .setTitle("Azure is online in:", message.guild.iconURL)
      .setDescription(" ")
      .setColor(color)
      .addField(bot.guilds.map(r => `${r.name}`), bot.guilds.map(r => `${r.memberCount} members`))
      .addField("Total of uniques users:", `${getCountUsers()}`)
      .setFooter(nameb + vo)
      .setTimestamp();
    message.channel.send(embed)
  };

  if (message.content.startsWith(prefix + "meteo")) {
    message.delete().catch(O_o => { });

    // Variables - Variables make it easy to call things, since it requires less typing.
    let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
    let sender = message.author; // This variable takes the message, and finds who the author is.
    let cont = message.content.slice(prefix.length).split(" "); // This variable slices off the prefix, then puts the rest in an array based off the spaces
    let args = cont.slice(1); // This slices off the command in cont, only leaving the arguments.

    // You can find some of the code used here on the weather-js npm page in the description.

    weather.find({ search: args.join(" "), degreeType: 'C' }, function (err, result) { // Make sure you get that args.join part, since it adds everything after weather.
      if (err) message.channel.send(err);

      // We also want them to know if a place they enter is invalid.
      if (result.length === 0) {
        message.channel.send('*Please enter a valid location.*') // This tells them in chat that the place they entered is invalid.
        return; // This exits the code so the rest doesn't run.
      }

      // Variables
      var current = result[0].current; // This is a variable for the current part of the JSON output
      var location = result[0].location; // This is a variable for the location part of the JSON output

      // Let's use an embed for this.
      const embed = new Discord.RichEmbed()
        .setTitle(`Weather for ${current.observationpoint}`) // This shows the current location of the weather.
        .setDescription(" ")
        .setThumbnail(current.imageUrl) // This sets the thumbnail of the embed
        .setColor(color) // This sets the color of the embed, you can set this to anything if you look put a hex color picker, just make sure you put 0x infront of the hex
        .addField('Sky', `${current.skytext}`) // This is the text of what the sky looks like, remember you can find all of this on the weather-js npm page.
        .addField('Timezone', `UTC${location.timezone}`, true) // This is the first field, it shows the timezone, and the true means `inline`, you can read more about this on the official discord.js documentation
        .addField('Degree Type', location.degreetype, true)// This is the field that shows the degree type, and is inline
        .addField('Temperature', `${current.temperature} Degrees`, true)
        .addField('Feels Like', `${current.feelslike} Degrees`, true)
        .addField('Winds', current.winddisplay, true)
        .addField('Humidity', `${current.humidity}%`, true)
        .setFooter(nameb + vo)
        .setTimestamp();

      // Now, let's display it when called
      message.channel.send({ embed });
    });
  }

  if (message.content.startsWith(prefix + "search")) {
    let args = message.content.split(" ")
    args.shift()
    message.delete().catch(O_o => { });
    if (args.length > 0) {
      var embed = new Discord.RichEmbed()
        .setTitle(`Search:`, message.guild.iconURL)
        .setDescription(" ")
        .setColor(color)
        .addField("Bing:", `[${args.join(' ')}](https://www.bing.com/#q=${args.join('%20')})`, true)
        .addField("Google:", `[${args.join(' ')}](https://www.google.com/#q=${args.join('%20')})`, true)
        .addField("Ecosia:", `[${args.join(' ')}](https://www.ecosia.org/search?q=${args.join('%20')})`, true)
        .addField("Qwant:", `[${args.join(' ')}](https://www.qwant.com/#q=${args.join('%20')})`, true)
        .addField("Wikipedia:", `[${args.join(' ')}](https://fr.wikipedia.org/wiki/${args.join('_')})`, true)
        //.addField("Link:",`https://www.google.com/#q=` + args.join('%20'))
        .setFooter(nameb + vo)
        //.setThumbnail(bot.user.displayAvatarURL);
        .setTimestamp();
      message.channel.send(embed)
    } else {
      message.channel.send("Parameter [object] please");
    }
  }

  // SCAN
  if (message.content.startsWith(prefix + "scan")) {
    var imagekasp = "https://img.icons8.com/color/2x/kaspersky.png";
    let args = message.content.split(" ")
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

  // EXT
  if (message.content.startsWith(prefix + "ext")) {
    let args = message.content.split(" ")
    args.shift()
    message.delete().catch(O_o => { });
    if (args.length > 0) {
      const imageext = `https://www.file-extension.info/images/resource/formats/${args.join('%20')}.png`;
      var embed = new Discord.RichEmbed()
        .setTitle(`Extension result:`, message.guild.iconURL)
        .setDescription(" ")
        .setColor(color)
        .addField("Link:", `[${args.join(' ')}](https://www.file-extension.info/en/format/${args.join('%20')})`, true)
        //.addField("Link:",`https://www.qwant.com/#q=` + args.join('%20'))
        .setFooter(nameb + vo)
        //.setThumbnail(bot.user.displayAvatarURL);
        .setThumbnail(imageext)
        .setTimestamp();
      message.channel.send(embed)
    } else {
      message.channel.send("Parameter [object] please");
    }
  }

  if (message.content.startsWith(prefix + "github")) {
    var embed = new Discord.RichEmbed()
      .setTitle(`Github:`, message.guild.iconURL)
      .setDescription(" ")
      .setColor(color)
      .addField("Link:", `[O3IL/Azure](https://github.com/O3IL/Azure)`)
      .addField("Invite link:", `[Discord link for Azure](https://discordapp.com/oauth2/authorize?client_id=699338337848262726&scope=bot&permissions=8)`)
      .addField("STAFF:", "╲⎝⧹⎫⎝ FJ®⎠⎧⧸⎠╱#3224 --- Owner/Dev\n"
        + "Karal#9133 --- Co-Dev")
      .addField("Donation:", `[Thanks!](https://github.com/O3IL/Azure)`)
      //.addField("Link:",`https://www.qwant.com/#q=` + args.join('%20'))
      .setFooter(nameb + vo)
      //.setThumbnail(bot.user.displayAvatarURL);
      .setTimestamp();
    message.channel.send(embed)
  }

});

//_____{TICKET}_____________________________________________________________________________________________________________________________________________________________



//_____{COMMENTS}___________________________________________________________________________________________________________________________________________________________

// Visit the GitHub for update or send issue ...
// For contribute, don't miss the comments.
// If tiy have access to the .env, send a issue in github please.
// Moon is ...
// { npm run dev }
// Use this for switch the bot online ans restart this if you have crashs
// Amazing!