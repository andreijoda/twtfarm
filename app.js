const tmi = require('tmi.js');
const Discord = require('discord.js');
const config = require("./config.json");
const { Client, Intents } = require('discord.js');

console.log("----------BOT-STARTED----------");
console.log("----------BOT-V.04/01/22------------");
console.log("Auth -> https://twitchapps.com/tmi/");

const user01 = 'Andrei';
const user02 = 'Nicole';
const user03 = 'Kauê';
const user04 = 'Matheus';
const user05 = 'Gabriel';
const user06 = 'Egon';
const user07 = 'Otávio';
const user08 = 'Felipe';
const user09 = 'Guilherme';
const user10 = null;
const user11 = 'Rafael';
const user12 = 'Leo';
const user13 = 'Antônia';
const user14 = 'Andrei 2 (dreizzdrop)';

const clientBot = new Discord.Client();


clientBot.on("ready", () => {
  //console.log(`Bot: Hosting ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
	clientBot.user.setActivity('Farm está em Andamento. 👌');
});

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
		m.edit(`Farm está em Andamento. 👌`);
		client.connect().then(m => {
			console.log('A conta de '+ user01 +' está Ok.');
			notifyOk(user01);
		}).catch(err => {
			console.log('A conta de '+ user01 +' está com erro. Verifique. Erro: ' + err);
			notifyError(user01,err);
		});
		
		client2.connect().then(m => {
			console.log('A conta de '+ user02 +' está Ok.');
			notifyOk(user02);
		}).catch(err => {
			console.log('A conta de '+ user02 +' está com erro. Verifique. Erro: ' + err);
			notifyError(user02,err);
		});
		
		client3.connect().then(m => {
			console.log('A conta de '+ user03 +' está Ok.');
			notifyOk(user03);
		}).catch(err => {
			console.log('A conta de '+ user03 +' está com erro. Verifique. Erro: ' + err);
			notifyError(user03,err);
		});
		
		client4.connect().then(m => {
			console.log('A conta de '+ user04 +' está Ok.');
			notifyOk(user04);
		}).catch(err => {
			console.log('A conta de '+ user04 +' está com erro. Verifique. Erro: ' + err);
			notifyError(user04,err);
		});
		
		client5.connect().then(m => {
			console.log('A conta de '+ user05 +' está Ok.');
			notifyOk(user05);
		}).catch(err => {
			console.log('A conta de '+ user05 +' está com erro. Verifique. Erro: ' + err);
			notifyError(user05,err);
		});
		
		client6.connect().then(m => {
			console.log('A conta de '+ user06 +' está Ok.');
			notifyOk(user06);
		}).catch(err => {
			console.log('A conta de '+ user06 +' está com erro. Verifique. Erro: ' + err);
			notifyError(user06,err);
		});
		
		client7.connect().then(m => {
			console.log('A conta de '+ user07 +' está Ok.');
			notifyOk(user07);
		}).catch(err => {
			console.log('A conta de '+ user07 +' está com erro. Verifique. Erro: ' + err);
			notifyError(user07,err);
		});
		
// 		client8.connect().then(m => {
// 			console.log('A conta de '+ user08 +' está Ok.');
// 			notifyOk(user08);
// 		}).catch(err => {
// 			console.log('A conta de '+ user08 +' está com erro. Verifique. Erro: ' + err);
// 			notifyError(user08,err);
// 		});
		
		client9.connect().then(m => {
			console.log('A conta de '+ user09 +' está Ok.');
			notifyOk(user09);
		}).catch(err => {
			console.log('A conta de '+ user09 +' está com erro. Verifique. Erro: ' + err);
			notifyError(user09,err);
		});
		
// 		client10.connect().then(m => {
// 			console.log('A conta de '+ user10 +' está Ok.');
// 			notifyOk(user10);
// 		}).catch(err => {
// 			console.log('A conta de '+ user10 +' está com erro. Verifique. Erro: ' + err);
// 			notifyError(user10,err);
// 		});
		
// 		client11.connect().then(m => {
// 			console.log('A conta de '+ user11 +' está Ok.');
// 			notifyOk(user11);
// 		}).catch(err => {
// 			console.log('A conta de '+ user11 +' está com erro. Verifique. Erro: ' + err);
// 			notifyError(user11,err);
// 		});
		
		client12.connect().then(m => {
			console.log('A conta de '+ user12 +' está Ok.');
			notifyOk(user12);
		}).catch(err => {
			console.log('A conta de '+ user12 +' está com erro. Verifique. Erro: ' + err);
			notifyError(user12,err);
		});
		
// 		client13.connect().then(m => {
// 			console.log('A conta de '+ user13 +' está Ok.');
// 			notifyOk(user13);
// 		}).catch(err => {
// 			console.log('A conta de '+ user13 +' está com erro. Verifique. Erro: ' + err);
// 			notifyError(user13,err);
// 		});
		
		client14.connect().then(m => {
			console.log('A conta de '+ user14 +' está Ok.');
			notifyOk(user14);
		}).catch(err => {
			console.log('A conta de '+ user14 +' está com erro. Verifique. Erro: ' + err);
			notifyError(user14,err);
		});
		
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
'bomberonebr',
'kwztv', // Amigos
'gnkzz_',
'katiaallzz',
'dreizz17'
];

var canaistofarm = canais.sort();
var canaisBreak = canaistofarm.toString().split(',');
var canaisOrg = canaisBreak.join("\n");

//Funções de mensagem embed
function notifyError(farmer,erro) {
	const webhookUsers = new Discord.WebhookClient('927929531115917342', 'QGY-DA7DqlZSbQuRG8rLwFLNHpZNmjl2uNeDfEbIt982WwvUS7a3W3xe6T6ZAz0tReu4');
	const embedError = new Discord.MessageEmbed()
	.setColor('#ED7300')
	.setThumbnail("https://i.imgur.com/WdCH6xl.gif")
	.setDescription("❌ A conta de **" + farmer + "** está com problemas. Erro: **" + erro + "**")
	.setTimestamp()
	.setFooter("Atualizado","https://i.imgur.com/WdCH6xl.gif");

webhookUsers.send('<@&927948192987873281>', {
	username: 'Verificação do Farm!',
	avatarURL: 'https://i.imgur.com/7NOSCov.png',
	embeds: [embedError],
});
}

function notifyOk(farmer) {
	const webhookUsers = new Discord.WebhookClient('927929531115917342', 'QGY-DA7DqlZSbQuRG8rLwFLNHpZNmjl2uNeDfEbIt982WwvUS7a3W3xe6T6ZAz0tReu4');
	const embedOk = new Discord.MessageEmbed()
	.setColor('#ED7300')
	.setThumbnail("https://i.imgur.com/R8SwAkb.gif")
	.setDescription(":white_check_mark:  A conta de **" + farmer + "** está com Ok.")
	.setTimestamp()
	.setFooter("Atualizado","https://i.imgur.com/R8SwAkb.gif");

webhookUsers.send({
	username: 'Verificação do Farm!',
	avatarURL: 'https://i.imgur.com/7NOSCov.png',
	embeds: [embedOk],
});
}

//Cliente 1 Dreizz17
const client = new tmi.Client({
	options: { debug: false, messagesLogLevel: "warn" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: 'DreizZ17',
		password: 'oauth:398h23khbfdez9wablz0psvr5y6qoy'
	},
	channels: canaistofarm
});
client.connect().then(m => {
	console.log('A conta de '+ user01 +' está Ok.');
	notifyOk(user01);
}).catch(err => {
	console.log('A conta de '+ user01 +' está com erro. Verifique. Erro: ' + err);
	notifyError(user01,err);
});
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

//Cliente 2 Nicole
const client2 = new tmi.Client({
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

client2.connect().then(m => {
	console.log('A conta de '+ user02 +' está Ok.');
	notifyOk(user02);
}).catch(err => {
	console.log('A conta de '+ user02 +' está com erro. Verifique. Erro: ' + err);
	notifyError(user02,err);
});
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
		password: 'oauth:r7q0v7s0u92u29vqp3igge4igs1u20'
	},
	channels: canaistofarm
});

client3.connect().then(m => {
	console.log('A conta de '+ user03 +' está Ok.');
	notifyOk(user03);
}).catch(err => {
	console.log('A conta de '+ user03 +' está com erro. Verifique. Erro: ' + err);
	notifyError(user03,err);
});
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
		password: 'oauth:g32wy07jbe6hngkvvfnq8a7172s5m3'
	},
	channels: canaistofarm
});

client4.connect().then(m => {
	console.log('A conta de '+ user04 +' está Ok.');
	notifyOk(user04);
}).catch(err => {
	console.log('A conta de '+ user04 +' está com erro. Verifique. Erro: ' + err);
	notifyError(user04,err);
});
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

client5.connect().then(m => {
	console.log('A conta de '+ user05 +' está Ok.');
	notifyOk(user05);
}).catch(err => {
	console.log('A conta de '+ user05 +' está com erro. Verifique. Erro: ' + err);
	notifyError(user05,err);
});
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
		password: 'oauth:iy1rpe35w5sk5vjh1y0rku273rudgt'
	},
	channels: canaistofarm
});

client6.connect().then(m => {
	console.log('A conta de '+ user06 +' está Ok.');
	notifyOk(user06);
}).catch(err => {
	console.log('A conta de '+ user06 +' está com erro. Verifique. Erro: ' + err);
	notifyError(user06,err);
});
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
		password: 'oauth:el7eocg8k9s7464cndgye5kibtbkz9'
	},
	channels: canaistofarm
});

client7.connect().then(m => {
	console.log('A conta de '+ user07 +' está Ok.');
	notifyOk(user07);
}).catch(err => {
	console.log('A conta de '+ user07 +' está com erro. Verifique. Erro: ' + err);
	notifyError(user07,err);
});
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
// const client8 = new tmi.Client({
// 	options: { debug: false, messagesLogLevel: "warn" },
// 	connection: {
// 		reconnect: true,
// 		secure: true
// 	},
// 	identity: {
// 		username: 'lfrothyl',
// 		password: 'oauth:ae0styuofbe2c6bx63o91yut4m3sb7'
// 	},
// 	channels: canaistofarm
// });

// client8.connect().then(m => {
// 	console.log('A conta de '+ user08 +' está Ok.');
// 	notifyOk(user08);
// }).catch(err => {
// 	console.log('A conta de '+ user08 +' está com erro. Verifique. Erro: ' + err);
// 	notifyError(user08,err);
// });
// client8.on('message', (channel, tags, message, self) => {
// 	if(self) return;
// 	if(message.toLowerCase() === '!dreifarm') {
// 		client8.say(channel, `@${tags.username}, Farm em Andamento!`);
// 	}
// });
// client8.on('join', (channel, username, self) => {
//     if(self) {
//         client8.log.error(`Joined08 ${channel}`);
//     }
// });

//cliente 9 Grv
const client9 = new tmi.Client({
	options: { debug: false, messagesLogLevel: "warn" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: 'grvtk',
		password: 'oauth:0f2kds9l7ml7pbiecgix0290vxtx8c'
	},
	channels: canaistofarm
});

client9.connect().then(m => {
	console.log('A conta de '+ user09 +' está Ok.');
	notifyOk(user09);
}).catch(err => {
	console.log('A conta de '+ user09 +' está com erro. Verifique. Erro: ' + err);
	notifyError(user09,err);
});
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

// CLIENTE 10 FALTA FALTA FALTA

//cliente 11 Rafa
// const client11 = new tmi.Client({
// 	options: { debug: false, messagesLogLevel: "warn" },
// 	connection: {
// 		reconnect: true,
// 		secure: true
// 	},
// 	identity: {
// 		username: 'ujoda',
// 		password: 'oauth:wqxgx0rrvg6jiv2nj9nqjqexwl98fb'
// 	},
// 	channels: canaistofarm
// });

// client11.connect().then(m => {
// 	console.log('A conta de '+ user11 +' está Ok.');
// 	notifyOk(user11);
// }).catch(err => {
// 	console.log('A conta de '+ user11 +' está com erro. Verifique. Erro: ' + err);
// 	notifyError(user11,err);
// });
// client11.on('message', (channel, tags, message, self) => {
// 	if(self) return;
// 	if(message.toLowerCase() === '!dreifarm') {
// 		client11.say(channel, `@${tags.username}, Farm em Andamento!`);
// 	}
// });
// client11.on('join', (channel, username, self) => {
//     if(self) {
//         client11.log.error(`Joined11 ${channel}`);
//     }
// });

//cliente 12 Leo Abila
const client12 = new tmi.Client({
	options: { debug: false, messagesLogLevel: "warn" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: '1timmaia1',
		password: 'oauth:qy53yxzlbuztpz895n1u8k1a0qzwrp'
	},
	channels: canaistofarm
});

client12.connect().then(m => {
	console.log('A conta de '+ user12 +' está Ok.');
	notifyOk(user12);
}).catch(err => {
	console.log('A conta de '+ user12 +' está com erro. Verifique. Erro: ' + err);
	notifyError(user12,err);
});
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
// const client13 = new tmi.Client({
// 	options: { debug: false, messagesLogLevel: "warn" },
// 	connection: {
// 		reconnect: true,
// 		secure: true
// 	},
// 	identity: {
// 		username: 'antgvlr',
// 		password: 'oauth:6shu2gjlim8bfkbnl9f6256zc014al'
// 	},
// 	channels: canaistofarm
// });

// client13.connect().then(m => {
// 	console.log('A conta de '+ user13 +' está Ok.');
// 	notifyOk(user13);
// }).catch(err => {
// 	console.log('A conta de '+ user13 +' está com erro. Verifique. Erro: ' + err);
// 	notifyError(user13,err);
// });
// client13.on('message', (channel, tags, message, self) => {
// 	if(self) return;
// 	if(message.toLowerCase() === '!dreifarm') {
// 		client13.say(channel, `@${tags.username}, Farm em Andamento!`);
// 	}
// });
// client13.on('join', (channel, username, self) => {
//     if(self) {
//         client13.log.error(`Joined13 ${channel}`);
//     }
// });

// cliente 14 dreizdrop
const client14 = new tmi.Client({
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

client14.connect().then(m => {
	console.log('A conta de '+ user14 +' está Ok.');
	notifyOk(user14);
}).catch(err => {
	console.log('A conta de '+ user14 +' está com erro. Verifique. Erro: ' + err);
	notifyError(user14,err);
});
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
	.setDescription("✔ **O Farm foi iniciado!!!.** ✔ \n\n " + canaisOrg)
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
