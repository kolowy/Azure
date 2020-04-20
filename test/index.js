const Discord = require("discord.js");
const client = new Discord.Client();

const fs = require("fs");

client.login("Njk5MzM4MzM3ODQ4MjYyNzI2.Xp2FAg.Jpb60yfBBMDsAs3SMmUlY4AJ9rQ");

client.commands = new Discord.Collection();

this.queue = new Map();


fs.readdir("./Commandes/Musique/",(error, f) => {
    if(error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log("Aucune commande trouvée !");

    commandes.forEach((f) => {

        let commande = require(`./Commandes/Musique/${f}`);
        console.log(`${f} commande chargée !`);

        client.commands.set(commande.help.name, commande);

    });
});

fs.readdir("./Commandes/Admin/",(error, f) => {
    if(error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log("Aucune commande trouvée !");

    commandes.forEach((f) => {

        let commande = require(`./Commandes/Admin/${f}`);
        console.log(`${f} commande chargée !`);

        client.commands.set(commande.help.name, commande);

    });
});

fs.readdir("./Commandes/User/",(error, f) => {
    if(error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log("Aucune commande trouvée !");

    commandes.forEach((f) => {

        let commande = require(`./Commandes/User/${f}`);
        console.log(`${f} commande chargée !`);

        client.commands.set(commande.help.name, commande);

    });
});




fs.readdir("./Events/",(error, f) => {
    if(error) console.log(error);
    console.log(`${f.length} events en chargement`);

    f.forEach((f) => {
        const events = require(`./Events/${f}`);
        const event = f.split(".")[0];

        client.on(event, events.bind(null, client));
    });
});