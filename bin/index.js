#!/usr/bin/env node
const figlet = require('figlet');
const inquirer = require('inquirer');
const time = require('timers');


const commands = {
    start: "cfg",
}

const messages = {
    welcome: {
        greetings: "Welcome",
        appreciation: "Thank you For Installing me 👍"
    },
    instructions: {
        howitworks: `How I Work\n
After Installing me globaly\non your project directory in the terminal\ntype command ${commands.start} to get started\nand follow the neccessary instructions to create the file you want`,
        commands: `These are the lists of commands\n
${commands.start}  to Create your file
\n${commands.help} To show you commands available` 
    },
    goodbye: {
        comeagain: "You can use me globally with the command",
        goodbye: `Thank You! don't hesitate to use me again and if you want to support you can go to my page ${'https://www.google.com'}`
    }

}
figlet("Color - Gen CLi", function (err, data) {
        if (err) {
            console.log("Something went wrong.......")
            console.dir(err);
            return;
        }
        console.log(data);
        
        const command = require('./commands.js')

            
        time.setTimeout(() => {
            console.log(`\n${messages.welcome.greetings}
            \n${messages.welcome.appreciation}
            \n${messages.instructions.commands}\n`)
        }, 800);
        
        time.setTimeout(() => {
            const start = require('./start.js')
        }, 2000);
        
    })