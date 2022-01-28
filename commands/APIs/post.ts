import { ICommand } from "wokcommands";
import axios from "axios";

export default {
  category: "API Examples",
  description: "Example of a POST request",
  permissions: ["ADMINISTRATOR"],
  slash: "both",
  testOnly: true,
  maxArgs: 1,
  expectedArgs: "<id>",
  expectedArgsTypes: ["NUMBER"],

  callback: async ({}) => {
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: "foo",
        body: "bar",
        userId: 1,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(data);
  },
} as ICommand;
