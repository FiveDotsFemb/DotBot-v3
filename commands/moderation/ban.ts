import { GuildMember } from "discord.js";
import { ICommand } from "wokcommands";

export default {
  category: "Moderation",
  description: "Bans a member",
  aliases: "b",
  slash: "both",
  testOnly: true,
  permissions: ["BAN_MEMBERS"],
  minArgs: 2,
  expectedArgs: "<user> <reason>",
  expectedArgsTypes: ["USER", "STRING"],

  callback: ({ message, interaction, args, guild }) => {
    if (!guild) {
      return "You can only use this in a server."
    }
    const target = message
      ? message.mentions.members?.first()
      : (interaction.options.getMember("user") as GuildMember);
    if (!target) {
      return "Please tag someone to ban.";
    }
    if (!target.bannable) {
      return {
        custom: true,
        content: "Cannot ban that user.",
        ephemeral: true,
      };
    }
    args.shift();
    const reason = args.join(" ");
    target.ban({
      reason,
      days: 7,
    });
    return {
      custom: true,
      content: `You banned <@${target.id}>`,
      ephemeral: true,
    };
  },
} as ICommand;
