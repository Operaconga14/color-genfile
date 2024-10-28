#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_config_1 = require("./config/node_config");
const prompts_1 = require("./config/prompts");
// show cli name
node_config_1.nodeConfig.figlet.text(`Color Gen-File CLI`, (err, data) => {
    if (err) {
        console.log(`Somehting Went wrong... restart your terminal try again`);
        return;
    }
    console.log(data);
});
// after few seconds it should ask the first questiokn
node_config_1.nodeConfig.time.setTimeout(() => {
    node_config_1.nodeConfig.inquirer
        .prompt([
        {
            type: 'list',
            name: 'framework',
            message: 'Which framework are you working with',
            default: 'Html',
            choices: ['Html', 'Angular', 'React', 'Vue', 'Next']
        }
    ])
        // from the answer the next prompt
        .then(answer => {
        console.log(answer);
        // call the directory prompt
        prompts_1.cliPrompts.directoryPrompt();
    })
        .catch(error => {
        console.error(error);
    });
}, 3000);
