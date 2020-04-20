module.exports = async(client) => {

  function setPresence(client) {
    module.exports = async(client) => {
      client.user.setPresence({
        activity: {
          name: "passe de la v12 à la v11"
        }
      })
    };
      

    /*const today = new Date();
    const day = today.getDate();
    const mounth = today.getMonth() + 1;
    if (day === 25 && mounth === 12) {
      client.user.setPresence({ game: { name: `Joyeux Noel`, type: 'PLAYING' }, status: 'dnd' }) // Change to "do not distibute" for Christmas.
        .then(() => console.log('activity refresh'))
        .catch(console.log)
    } else if ((day === 31 && mounth === 12) || (day === 1 && mounth === 1)) {
      client.user.setPresence({ game: { name: `Joyeuse nouvelle année`, type: 'PLAYING' }, status: 'online' }) // Change to "do not distibute" for Christmas.
        .then(() => console.log('activity refresh'))
        .catch(console.log)
    } else if (day === 25 && mounth === 07) {
      client.user.setPresence({ game: { name: `Joyeux anniversaire Fj`, type: 'PLAYING' }, status: 'online' }) // Change to "do not distibute" for Christmas.
        .then(() => console.log('activity refresh'))
        .catch(console.log)
    } else if (day === 23 && mounth === 08) {
      client.user.setPresence({ game: { name: `Horrible Halloween`, type: 'PLAYING' }, status: 'idle' }) // Change to "do not distibute" for Christmas.
        .then(() => console.log('activity refresh'))
        .catch(console.log)
    } else if (day >= 13 && day <= 23 && mounth === 5) {
      client.user.setPresence({ game: { name: `C'est le festival du film de Cannes `, type: 'PLAYING' }, status: 'online' }) // Change to "do not distibute" for Christmas.
        .then(() => console.log('activity refresh'))
        .catch(console.log)
    } else {
      client.user.setPresence({ game: { name: `.help | Use by ${getCountUsers()} users in ${bot.guilds.size} guilds.`, type: 'PLAYING' }, status: 'online' }) // Change to "do not distibute" for Christmas.
        .then(() => console.log('activity refresh'))
        .catch(console.log)
    }
  

  } catch (error) {
    console.log(error)
  }
}*/
  /*client.on('ready', () => {
    setAvatar(client);
    setInterval(setAvatar, 3600000);
    setPresence(client);
    setInterval(setPresence, 3600000);
    new antispam(client, {
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
}*/
  }
}