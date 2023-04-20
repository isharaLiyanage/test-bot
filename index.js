require("dotenv").config();
require("./config");
const { Client, GatewayIntentBits, Partials } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
  ],
  partials: [Partials.User, Partials.Message],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  } else if (interaction.commandName === "hai") {
    await interaction.reply(`hello, am ${client.user.tag}! how are you😊 `);
  }
});
client.on("messageCreate", (msg) => {
  console.log("first");
  console.log(msg);
  if (msg.content === "fine") {
    msg.reply("nice");
  }
});

client.login(process.env.TOKEN);
