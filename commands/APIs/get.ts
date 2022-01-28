import { ICommand } from "wokcommands";
import axios from "axios";

export default {
  category: "API Examples",
  description: "Example of a GET request",
  permissions: ["ADMINISTRATOR"],
  slash: "both",
  testOnly: true,
  maxArgs: 1,
  expectedArgs: "<id>",
  expectedArgsTypes: ["NUMBER"],

  callback: async ({ args }) => {
    let uri = "https://jsonplaceholder.typicode.com/posts";
    if (args.length) {
      uri += `/${args[0]}`;
    }
    const { data } = await axios.get(uri);
    console.log(data);
  },
} as ICommand;
