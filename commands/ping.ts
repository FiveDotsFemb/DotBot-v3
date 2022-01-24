import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Responds with Pong',
    slash: 'both',
    testOnly: true,

    callback: ({}) => {
        return 'pong'
    },
} as ICommand