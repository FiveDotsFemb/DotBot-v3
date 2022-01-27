import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
  category: "General",
  description: "Sends an Embed of the Femboy KZ servers and their IPs",
  slash: "both",
  testOnly: true,
  permissions: ["ADMINISTRATOR"],

  callback: async ({ message }) => {
    const embed = new MessageEmbed()
      .setTitle("All current Femboy KZ Servers and their IPs")
      .setDescription("** **")
      .setColor("#FF33AC")
      .addFields([
        {
          name: "Whitelist Servers",
          value: "** **",
        },
        {
          name: ":flag_eu:  **[Global] - 128tick**",
          value: "135.181.58.159:27040",
          inline: true,
        },
        {
          name: ":flag_eu:  **[Global] - 128tick**",
          value: "135.181.58.159:27045",
          inline: true,
        },
        {
          name: ":flag_eu:  **64tick**",
          value: "135.181.58.159:27041",
        },
        {
          name: "VIP Servers",
          value: "** **",
        },
        {
          name: ":flag_eu:  **Autobhop - 128tick**",
          value: "135.181.58.159:27043",
          inline: true,
        },
        {
          name: ":flag_eu:  **Autobhop - 102.4tick**",
          value: "135.181.58.159:27044",
          inline: true,
        },
        {
          name: "Public Servers",
          value: "** **",
        },
        {
          name: ":flag_eu:  **[Global] - 128tick**",
          value: "135.181.58.159:27046",
          inline: true,
        },
        {
          name: ":flag_eu:  **Autobhop - 64tick**",
          value: "135.181.58.159:27042",
          inline: true,
        },
      ]);
    const newMessage = await message.channel.send({
      embeds: [embed],
    });
  },
} as ICommand;
