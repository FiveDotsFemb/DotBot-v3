import DiscordJS, { Intents } from "discord.js";
import WOKCommands from "wokcommands";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";
import testSchema from "./models/test-schema";
dotenv.config();

const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_PRESENCES,
  ],
});

client.on("ready", async () => {
  // await mongoose.connect(process.env.MONGO_URI || "", {
  //   keepAlive: true,
  // });

  new WOKCommands(client, {
    commandsDir: path.join(__dirname, "commands"),
    featuresDir: path.join(__dirname, "features"),
    typeScript: true,
    testServers: ["752232440579227848", "858419058135662622"],
    botOwners: ["289767921956290580"],
    mongoUri: process.env.MONGO_URI,
  });
});

client.login(process.env.TOKEN);
