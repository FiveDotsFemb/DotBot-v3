import { GuildMember } from "discord.js";
import { ICommand } from "wokcommands";

export default {
  category: "Moderation",
  description: "Bans a member",
  slash: "both",
  testOnly: true,
  guildOnly: true,
  requireRoles: true,
  minArgs: 2,
  expectedArgs: "<user> <reason>",
  expectedArgsTypes: ["USER", "STRING"],

  callback: ({ message, interaction, args }) => {
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
