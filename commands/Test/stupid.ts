import {
  ButtonInteraction,
  MessageActionRow,
  MessageButton,
  MessageComponentInteraction,
} from "discord.js";
import { Collection } from "mongoose";
import { ICommand } from "wokcommands";

export default {
  category: "Testing",
  description: "foxy",
  slash: "both",
  testOnly: true,

  callback: async ({ interaction: msgInt, channel }) => {
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setCustomId("stupid_yes")
          .setLabel("Yes")
          .setStyle("SUCCESS")
      )
      .addComponents(
        new MessageButton()
          .setCustomId("stupid_no")
          .setLabel("No")
          .setStyle("DANGER")
      );
    const linkRow = new MessageActionRow().addComponents(
      new MessageButton()
        .setURL("https://youtu.be/1jmvk6bYosc")
        .setLabel("Cheeto reup")
        .setStyle("LINK")
    );
    await msgInt.reply({
      content: "Are you stupid?",
      components: [row, linkRow],
      ephemeral: true,
    });
    const filter = (btnInt: MessageComponentInteraction) => {
      return msgInt.user.id === btnInt.user.id;
    };
    const collector = channel.createMessageComponentCollector({
      filter,
      max: 1,
      time: 15000,
    });
    collector.on("collect", (i: MessageComponentInteraction) => {
      i.reply({
        content: "You are stupid.",
        ephemeral: true,
      });
    });
    collector.on("end", async (collection) => {
      collection.forEach((click) => {
        console.log(click.user.id, click.customId);
      });
      if (collection.first()?.customId === "stupid_yes") {
      }
      await msgInt.editReply({
        content: "You already pressed a button dumbass.",
        components: [],
      });
    });
  },
} as ICommand;
