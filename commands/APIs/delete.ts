import { ICommand } from "wokcommands";
import axios from "axios";

export default {
  category: "API Examples",
  description: "Example of a DELETE request",
  permissions: ["ADMINISTRATOR"],
  slash: "both",
  testOnly: true,
  minArgs: 1,
  maxArgs: 1,
  expectedArgs: "<id>",
  expectedArgsTypes: ["NUMBER"],

  callback: async ({ args }) => {
    const uri = `https://jsonplaceholder.typicode.com/posts/${args[0]}`;
    const { data } = await axios.delete(uri);
    console.log(data);
  },
} as ICommand;
