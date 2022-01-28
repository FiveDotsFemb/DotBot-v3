import { ICommand } from "wokcommands";
import DJS from "discord.js";

export default {
  category: "Configuration",
  description: "Sets the bot's status",
  slash: "both",
  testOnly: true,
  ownerOnly: true,
  minArgs: 1,
  maxArgs: 2,
  expectedArgs: "<activity> <status>",
  expectedArgsTypes: ["STRING"],

  callback: async ({ client, text, args }) => {
    client.user?.setPresence({
      activities: [
        {
          name: text,
        },
      ],
    }); 
    args.slice()
    if (args[1] == "online") {
      client.user?.setPresence({
        status: "online",
      });
    } else if (args[1] == "idle") {
      client.user?.setPresence({
        status: "idle",
      });
    } else if (args[1] == "dnd") {
      client.user?.setPresence({
        status: "dnd",
      });
    } else if (args[1] == "invisible") {
      client.user?.setPresence({
        status: "invisible",
      });
    }
    return "Status updated.";
  },
} as ICommand;
