const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.member).hasPermission('MANAGE_ROLES')) {
        message.channel.send(`Tu n'as pas la permission`);
    };

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) {
        message.channel.send(`JPP j'fais dodo`);
    }

    if(!args[0]) return message.channel.send(`Quel role aussi?`);


    let membre = message.guild.member(message.author);

    

    membre.roles.add(args[0]).catch(console.error);

    message.channel.send(`${membre} à été promu ${args} `);

};

module.exports.help = {
    name: "addrole"
}