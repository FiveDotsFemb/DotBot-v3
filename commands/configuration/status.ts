import { ICommand } from "wokcommands";

export default {
  category: "Configuration",
  description: "Sets the bot's status",
  slash: "both",
  testOnly: true,
  ownerOnly: true,
  minArgs: 1,
  expectedArgs: "<status>",

  callback: ({ client, text }) => {
    client.user?.setPresence({
      status: "dnd",
      activities: [
        {
          name: text,
        },
      ],
    });
    return "Status updated.";
  },
} as ICommand;
