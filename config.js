const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "hai",
    description: "Replies with hello!",
  },
  {
    name: "fine",
    description: "Replies with hello!",
  },
];

const rest = new REST({ version: "10" }).setToken(
  "MTA5ODQ2ODY5Mzc0ODQ5ODQ3Mg.G8ctMX.PSlmlpweRs08OWOdYs3Qk8QA6Bs_Upugj0R180"
);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands("1098468693748498472"), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
