const command = {
        start: 'cfg',
        generateVariable: 'cfg g -v || cfg variables',
        generateColors: 'cfg g -c || cfg colors'
};

const extensions = {
        Css: '.css',
        Scss: '.scss'
};

const supportLink = '';

const messages = {
        welcome: {
                greetings: 'Welcome',
                appreciation: 'Thank you for installing me 👍'
        },
        goodbye: {
                comeagain: 'You can use me globally with the command {cfg}',
                goodbye: `Thank You! don't hesitate to use me again and if you want to support you can go to my page ${supportLink}`,
        },
        success: {
                created: "File created and generated succssfully",
        }
};



export const cliConfig = {
        command,
        extensions,
        messages
};
