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
  expectedArgs: "<activity> [status]",

  callback: async ({ client, text, args }) => {
    if (args[1] === "online") {
      client.user?.setPresence({
        status: "online",
        activities: [
          {
            name: text,
          },
        ],
      });
    } else if (args[1] === "idle") {
      client.user?.setPresence({
        status: "idle",
        activities: [
          {
            name: text,
          },
        ],
      });
    } else if (args[1] === "dnd") {
      client.user?.setPresence({
        status: "dnd",
        activities: [
          {
            name: text,
          },
        ],
      });
    } else if (args[1] === "invisible") {
      client.user?.setPresence({
        status: "invisible",
        activities: [
          {
            name: text,
          },
        ],
      });
    }
    return "Status updated.";
  },
} as ICommand;
