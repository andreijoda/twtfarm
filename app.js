const tmi = require('tmi.js');
const Discord = require('discord.js');
const config = require("./config.json");

console.log("----------BOT-STARTED----------");
console.log("----------BOT-1.0.2------------");
console.log("Auth -> https://twitchapps.com/tmi/");

const clientBot = new Discord.Client();
clientBot.on("menssage", (menssage) =>{
	console.log("O FarmTwitch Foi Iniciado.")
});

clientBot.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const comando = args.shift().toLowerCase();

	if(comando === "farm") {
		const m = await message.channel.send("Farmando?");
		m.edit(`Farm está em Andamento. 👌`)
	}
});
clientBot.login(config.token);

//Lista com os canais a serem farmados..
var canais = [ 'gaules',
'brnwowzk1',
'mch_agg',
'murilo_rt',
'fbzfps',
'dougrrr',
'csrfps',
'mibrtv',
'stereonline',
'nobru',
'blxckoutz',
'jonvlogs',
'ale_apoka',
'boltz',
'sev7n',
'jeffaocs',
'velhovamp1',
'skipnho',
'tixinhadois',
'deercheerup',
'mathz99',
'clutchcircuit', // Camp
'paitambemjoga',
'axtlol',
'oestagiario',
'hithxck',
'thomefn',
'hastad',
'nycts',
'faah',
'baiano',
'loirinh4_',
'brusanada',
'pulgaboy',
'mojaksz',
'yayahuz',
'taspio',
'bianquinha182',
'cachorro1337c',
'att_oficial',
'dois_a_dois',
'lucaspierry1',
'cbcsbr', // Camp
'saullo',
'kwztv', // Amigos
'gnkzz_',
'katiaallzz',
'dreizz17'
];

var canaistofarm = canais.sort();
var canaisBreak = canaistofarm.toString().split(',');
var canaisOrg = canaisBreak.join("\n");

//Cliente 1 Dreizz17
const client = new tmi.Client({
	options: { debug: false, messagesLogLevel: "warn" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: 'DreizZ17',
		password: 'oauth:bix4gq3n42dyam183k2y6xo8mw7oub'
	},
	channels: canaistofarm
});
client.connect();
client.on('message', (channel, tags, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!dreifarm') {
		client.say(channel, `@${tags.username}, Farm em Andamento!`);
	}
});
client.on('join', (channel, username, self) => {
    if(self) {
        client.log.error(`Joined01 ${channel}`);
    }
});

//Cliente 2 dreizzdrop
const client2 = new tmi.Client({
	options: { debug: false, messagesLogLevel: "warn" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: 'dreizzdrop',
		password: 'oauth:txcgzyvkl2nd5sxd3b7xj1ddd6vjsf'
	},
	channels: canaistofarm
});

client2.connect();
client2.on('message', (channel, tags, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!dreifarm') {
		client2.say(channel, `@${tags.username}, Farm em Andamento!`);
	}
});
client2.on('join', (channel, username, self) => {
    if(self) {
        client2.log.error(`Joined02 ${channel}`);
    }
});

//cliente 3 Kwz
const client3 = new tmi.Client({
	options: { debug: false, messagesLogLevel: "warn" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: 'kwztv',
		password: 'oauth:28z24j41rftt7g3akx9brh71g5vi2s'
	},
	channels: canaistofarm
});

client3.connect();
client3.on('message', (channel, tags, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!dreifarm') {
		client3.say(channel, `@${tags.username}, Farm em Andamento!`);
	}
});
client3.on('join', (channel, username, self) => {
    if(self) {
        client3.log.error(`Joined03 ${channel}`);
    }
});

//cliente 4 KNG
const client4 = new tmi.Client({
	options: { debug: false, messagesLogLevel: "warn" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: 'gnkzz_',
		password: 'oauth:c0eojnbihwfzyuej9l3rx7fscqhtrb'
	},
	channels: canaistofarm
});

client4.connect();
client4.on('message', (channel, tags, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!dreifarm') {
		client4.say(channel, `@${tags.username}, Farm em Andamento!`);
	}
});
client4.on('join', (channel, username, self) => {
    if(self) {
        client4.log.error(`Joined04 ${channel}`);
    }
});


//cliente 5 Katialzz
const client5 = new tmi.Client({
	options: { debug: false, messagesLogLevel: "warn" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: 'katiaallzz',
		password: 'oauth:5jw5ou8dha44d2trh5wqlfmc3jt0rp'
	},
	channels: canaistofarm
});

client5.connect();
client5.on('message', (channel, tags, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!dreifarm') {
		client5.say(channel, `@${tags.username}, Farm em Andamento!`);
	}
});
client5.on('join', (channel, username, self) => {
    if(self) {
        client5.log.error(`Joined05 ${channel}`);
    }
});

//cliente 6 srPaixao
const client6 = new tmi.Client({
	options: { debug: false, messagesLogLevel: "warn" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: 'srpaixa0',
		password: 'oauth:5zm7z38wkiqd4x459nppg3c4xw2d24'
	},
	channels: canaistofarm
});

client6.connect();
client6.on('message', (channel, tags, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!dreifarm') {
		client6.say(channel, `@${tags.username}, Farm em Andamento!`);
	}
});
client6.on('join', (channel, username, self) => {
    if(self) {
        client6.log.error(`Joined06 ${channel}`);
    }
});


//cliente 7 Otac
const client7 = new tmi.Client({
	options: { debug: false, messagesLogLevel: "warn" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: 'otacc',
		password: 'oauth:654qdlo7dyg1oyotttpq21p6c9fnkz'
	},
	channels: canaistofarm
});

client7.connect();
client7.on('message', (channel, tags, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!dreifarm') {
		client7.say(channel, `@${tags.username}, Farm em Andamento!`);
	}
});
client7.on('join', (channel, username, self) => {
    if(self) {
        client7.log.error(`Joined07 ${channel}`);
    }
});

//cliente 8 Froty
const client8 = new tmi.Client({
	options: { debug: false, messagesLogLevel: "warn" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: 'lfrothyl',
		password: 'oauth:6gid0os8g17fok93o63f2wm2ris8ey'
	},
	channels: canaistofarm
});

client8.connect();
client8.on('message', (channel, tags, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!dreifarm') {
		client8.say(channel, `@${tags.username}, Farm em Andamento!`);
	}
});
client8.on('join', (channel, username, self) => {
    if(self) {
        client8.log.error(`Joined08 ${channel}`);
    }
});

//cliente 9 Grv
const client9 = new tmi.Client({
	options: { debug: false, messagesLogLevel: "warn" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: 'grvtk',
		password: 'oauth:ydgdr83cmtjqgmb56thpvbh92uxpts'
	},
	channels: canaistofarm
});

client9.connect();
client9.on('message', (channel, tags, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!dreifarm') {
		client9.say(channel, `@${tags.username}, Farm em Andamento!`);
	}
});
client9.on('join', (channel, username, self) => {
    if(self) {
        client9.log.error(`Joined09 ${channel}`);
    }
});

//cliente 10 Grv
const client10 = new tmi.Client({
	options: { debug: false, messagesLogLevel: "warn" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: 'LeandroBrito_',
		password: 'oauth:u7vift2fnjolvxy1hej4znpi7kb6cz'
	},
	channels: canaistofarm
});

client10.connect();
client10.on('message', (channel, tags, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!dreifarm') {
		client10.say(channel, `@${tags.username}, Farm em Andamento!`);
	}
});
client10.on('join', (channel, username, self) => {
    if(self) {
        client10.log.error(`Joined10 ${channel}`);
    }
});

//cliente 11 Rafa
const client11 = new tmi.Client({
	options: { debug: false, messagesLogLevel: "warn" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: 'ujoda',
		password: 'oauth:wqxgx0rrvg6jiv2nj9nqjqexwl98fb'
	},
	channels: canaistofarm
});

client11.connect();
client11.on('message', (channel, tags, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!dreifarm') {
		client11.say(channel, `@${tags.username}, Farm em Andamento!`);
	}
});
client11.on('join', (channel, username, self) => {
    if(self) {
        client11.log.error(`Joined11 ${channel}`);
    }
});

//cliente 12 Leo Abila
const client12 = new tmi.Client({
	options: { debug: false, messagesLogLevel: "warn" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: '1timmaia1',
		password: 'oauth:0cp304r2djo185o9a15730ip3tf0pl'
	},
	channels: canaistofarm
});

client12.connect();
client12.on('message', (channel, tags, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!dreifarm') {
		client12.say(channel, `@${tags.username}, Farm em Andamento!`);
	}
});
client12.on('join', (channel, username, self) => {
    if(self) {
        client12.log.error(`Joined12 ${channel}`);
    }
});

// cliente 13 Antonia
const client13 = new tmi.Client({
	options: { debug: false, messagesLogLevel: "warn" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: 'antgvlr',
		password: 'oauth:fuefhy0on4qixnhh4t069ecww5cwvh'
	},
	channels: canaistofarm
});

client13.connect();
client13.on('message', (channel, tags, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!dreifarm') {
		client13.say(channel, `@${tags.username}, Farm em Andamento!`);
	}
});
client13.on('join', (channel, username, self) => {
    if(self) {
        client13.log.error(`Joined13 ${channel}`);
    }
});

// cliente 14 Nicole
const client14 = new tmi.Client({
	options: { debug: false, messagesLogLevel: "warn" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: 'vadiniky',
		password: 'oauth:bmwko5tz136itlnl132jhevfe0aoyd'
	},
	channels: canaistofarm
});

client14.connect();
client14.on('message', (channel, tags, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!dreifarm') {
		client14.say(channel, `@${tags.username}, Farm em Andamento!`);
	}
});
client14.on('join', (channel, username, self) => {
    if(self) {
        client14.log.error(`Joined14 ${channel}`);
    }
});

const webhookClient = new Discord.WebhookClient('881758758680821760', '7mzXoghY4mez2fhD4gWf2M4x-31-hX0YKVDrhB4ofoNADQfzMfCWIgdedbwtZxWEa7Qh');

	const embedStart = new Discord.MessageEmbed()
	.setColor('#ED7300')
	.setThumbnail("https://i.pinimg.com/originals/1e/c9/15/1ec915eb76dcff7edf9e5c195b70363f.gif")
	.setDescription("✔ **O Farm foi iniciado!.** ✔ \n\n " + canaisOrg)
	.setTimestamp()
	.setFooter("Atualizado","https://i.pinimg.com/originals/1e/c9/15/1ec915eb76dcff7edf9e5c195b70363f.gif");

webhookClient.send('@everyone', {
	username: 'Verificação do Farm!',
	avatarURL: 'https://i.imgur.com/7NOSCov.png',
	embeds: [embedStart],
});

setInterval(function () {
	const embed = new Discord.MessageEmbed()
	.setColor('#ED7300')
	.setThumbnail("https://i.imgur.com/C1zVBZt.gif")
	.setDescription("**O Farm está em andamento!.** ✔ \n\n O Farm será verificado de 30 em 30 Minutos. \n **Caso não atualize a cada 30 Minutos Informar @uDrei Urgente!** 🚨 \n *Obrigado por utilizar uDrei Twitch Farm.*")
	.setTimestamp()
	.setFooter("Atualizado","https://i.imgur.com/C1zVBZt.gif");

	webhookClient.send('@everyone', {
		username: 'Verificação do Farm!',
		avatarURL: 'https://i.imgur.com/7NOSCov.png',
		embeds: [embed],
	});
}, 60000*30);


// const webhook = require("webhook-discord");

// const Hook = new webhook.Webhook("https://discord.com/api/webhooks/808224320806715413/TQq2Za5DtGHYBuKU0ME-HlShlGNfrtrb3SY74srnULHeyXS_GdPXjhPe0DCYu2YrV8XP");
// const msg = new webhook.MessageBuilder()
//                .setName("Verificação Farm!")
// 				.setAvatar("https://i.imgur.com/7NOSCov.png")
// 				.setText("@everyone")
//                .setColor("#ED7300")
// 				.setFooter("Atualizado","https://i.imgur.com/C1zVBZt.gif")
// 				.setThumbnail("https://i.imgur.com/C1zVBZt.gif")
// 				.setDescription("**O Farm está em andamento.** 👍 \n\n O Farm será verificado de 30 em 30 Minutos. \n **Caso não atualize a cada 30 Minutos Informar @uDrei Urgente!** \n *Obrigado por utilizar uDrei Twitch Farm.*")
// 				.setTime();
// Hook.send(msg);
// console.log("----------WEBHOOK-ENVIADO----------");
// setInterval(function () {
// 	Hook.send(msg);
// }, 60000*30);

// const express = require("express");
// const app = express();
// const fetch = require("node-fetch");

// const wakeUpDyno = (url, interval) => {
//     const milliseconds = interval * 60000;
//     setTimeout(() => {
//         fetch(url);
//     }, milliseconds);
// };

// module.exports = wakeUpDyno;
 
//Liberação de portas Heroku
// app.listen(process.env.PORT || 3000);

// // Motivar Bot a ficar online
// var reqTimer = setTimeout(function wakeUp() {
// 	request("https://nameless-gorge-19527.herokuapp.com", function() {
// 	   console.log("WAKE UP DYNO");
// 	});
// 	return reqTimer = setTimeout(wakeUp, 1200000);
//  }, 1200000);

// # Start Script
// su - dreipi -c '/home/dreipi/Documents/Bot_Twitch node .'
