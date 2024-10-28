#!/usr/bin/env node
import { nodeConfig } from "./config/node_config";
import { cliPrompts } from "./config/prompts";

// show cli name
nodeConfig.figlet.text(`Color Gen-File CLI`, (err, data) => {
        if (err) {
                console.log(`Somehting Went wrong... restart your terminal try again`);
                return;
        }
        console.log(data);
});

// after few seconds it should ask the first questiokn
nodeConfig.time.setTimeout(() => {
        nodeConfig.inquirer
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
                        cliPrompts.directoryPrompt()

                })
                .catch(error => {
                        console.error(error);
                });

}, 3000);
