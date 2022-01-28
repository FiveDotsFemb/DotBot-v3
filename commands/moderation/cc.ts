import { ICommand } from "wokcommands";

export default {
  category: "Moderation",
  description: "Deletes multiple messages at once.",
  slash: "both",
  testOnly: true,
  permissions: ["MANAGE_MESSAGES"],
  minArgs: 0,
  maxArgs: 1,
  expectedArgs: "[amount]",

  callback: async ({ message, interaction, channel, args }) => {
    // const amount = parseInt(args.shift()!)
    const amount = args.length ? parseInt(args.shift()!) : 10;
    if (message) {
      await message.delete();
    }
    // const { size } = await channel.bulkDelete(amount, true) // bulk delete
    const messages = await channel.messages.fetch({ limit: amount }); // fetch and delete
    const { size } = messages;
    messages.forEach((message) => message.delete());
    const reply = `Deleted ${size} message(s).`;
    if (interaction) {
      return reply;
    }
    channel.send(reply);
  },
} as ICommand;
