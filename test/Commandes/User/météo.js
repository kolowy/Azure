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


        message.delete().catch(O_o => { });
    
        // Variables - Variables make it easy to call things, since it requires less typing.
        let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
        let sender = message.author; // This variable takes the message, and finds who the author is.
        let cont = message.content.slice(prefix.length).split(" "); // This variable slices off the prefix, then puts the rest in an array based off the spaces
        //let args = cont.slice(1); // This slices off the command in cont, only leaving the arguments.
    
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

module.exports.help = {
    name: "meteo"
}