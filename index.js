const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});
const TOKEN = process.env.DISCORD_TOKEN;
client.once('ready', () => {console.log(`WLØXY GUARD AKTIF 24/7`);});
client.on('messageCreate', m => {if(m.content === '?ping') m.reply('Pong! WLØXY GUARD Fly.io da 24/7');});
client.login(TOKEN);
