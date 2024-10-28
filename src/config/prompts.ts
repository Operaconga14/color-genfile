import { Colors } from "../colors";
import { cliConfig } from "./cli_config";
import { nodeConfig } from "./node_config";

// Next prompt is the directory prompt\
function directoryPrompt() {
        nodeConfig.inquirer
                .prompt([
                        {
                                type: 'text',
                                name: 'filepath',
                                message: 'Location where the file would be',
                                default: nodeConfig.path.basename(process.cwd()),
                        }
                ])
                .then(answer => {
                        const projectdir = `${process.cwd()}/`;
                        const desirefld = `${answer.filepath}/`;
                        const singledir = nodeConfig.path.join(`${projectdir}${desirefld}`);

                        console.log(singledir);

                        // call the next prompt function
                        filenamePrompt(`${singledir}`);

                });
}

// filename prompt
function filenamePrompt(directory: any) {
        nodeConfig.inquirer
                .prompt([
                        {
                                type: 'text',
                                name: 'filename',
                                message: 'Give your file a name',
                                default: 'colors',

                        }
                ])
                .then(answer => {
                        const filename = `${answer.filename}`;
                        console.log(filename);
                        extensionPrompt(directory, filename);
                });
}

// extension prompt
function extensionPrompt(directory: any, filename: any) {
        nodeConfig.inquirer
                .prompt([
                        {
                                type: 'list',
                                name: 'fileextension',
                                message: 'Choose your file extention',
                                choices: ['Css', 'Scss']
                        }
                ])
                .then(answer => {
                        const fileext = `${answer.fileextension}`;
                        console.log(fileext);
                        colorSelectionPrompt(directory, filename, fileext);
                });
}

// color selection prompt
function colorSelectionPrompt(directory: any, filename: any, extension: any) {
        nodeConfig.inquirer
                .prompt([
                        {
                                type: 'list',
                                name: 'color',
                                message: 'Choose The color you want for your project',
                                choices: ['Black', 'Blue', 'Orange', 'Brown', 'Green', 'Purple', 'Red', 'Pink', 'White', 'Yellow']
                        }
                ])
                .then(answer => {
                        const chossencolor = `${answer.color}`;
                        console.log(chossencolor);
                        generateColorPlatte(directory, filename, extension, chossencolor);
                });
}



// create the file and classes
function generateColorPlatte(directory: any, filename: any, extension: any, choosencolor: any) {
        // const fullpath = `${directory}${filename}.${extension.toLowerCase()}`;
        const fullpathj = nodeConfig.path.join(directory, `${filename}.${extension.toLowerCase()}`);
        console.log(fullpathj);
        console.log(`Creating file at: ${fullpathj}...`);

        switch (choosencolor) {
                case 'Black':
                        switch (extension) {
                                case 'Css':
                                        nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${Colors.black}`, { flag: 'a' });
                                        console.log(`${cliConfig.messages.success.created}`);
                                        break;
                                case 'Scss':
                                        nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${Colors.black}`, { flag: 'a' });
                                        console.log(`${cliConfig.messages.success.created}`);
                                        break;
                                default:
                                        break;
                        }
                        break;
                case 'Blue':
                        switch (extension) {
                                case 'Css':
                                        nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${Colors.blue}`, { flag: 'a' });
                                        console.log(`${cliConfig.messages.success.created}`);
                                        break;
                                case 'Scss':
                                        nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${Colors.blue}`, { flag: 'a' });
                                        console.log(`${cliConfig.messages.success.created}`);
                                        break;
                                default:
                                        break;
                        }
                        break;
                case 'Brown':
                        switch (extension) {
                                case 'Css':
                                        nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${Colors.brown}`, { flag: 'a' });
                                        console.log(`${cliConfig.messages.success.created}`);
                                        break;
                                case 'Scss':
                                        nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${Colors.brown}`, { flag: 'a' });
                                        console.log(`${cliConfig.messages.success.created}`);
                                        break;
                                default:
                                        break;
                        }
                        break;
                case 'Green':
                        switch (extension) {
                                case 'Css':
                                        nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${Colors.green}`, { flag: 'a' });
                                        console.log(`${cliConfig.messages.success.created}`);
                                        break;
                                case 'Scss':
                                        nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${Colors.green}`, { flag: 'a' });
                                        console.log(`${cliConfig.messages.success.created}`);
                                        break;
                                default:
                                        break;
                        }
                        break;
                case 'Orange':
                        switch (extension) {
                                case 'Css':
                                        nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${Colors.orange}`, { flag: 'a' });
                                        console.log(`${cliConfig.messages.success.created}`);
                                        break;
                                case 'Scss':
                                        nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${Colors.orange}`, { flag: 'a' });
                                        console.log(`${cliConfig.messages.success.created}`);
                                        break;
                                default:
                                        break;
                        }
                        break;
                case 'Pink':
                        switch (extension) {
                                case 'Css':
                                        nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${Colors.pink}`, { flag: 'a' });
                                        console.log(`${cliConfig.messages.success.created}`);
                                        break;
                                case 'Scss':
                                        nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${Colors.pink}`, { flag: 'a' });
                                        console.log(`${cliConfig.messages.success.created}`);
                                        break;
                                default:
                                        break;
                        }
                        break;
                case 'Purple':
                        switch (extension) {
                                case 'Css':
                                        nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${Colors.purple}`, { flag: 'a' });
                                        console.log(`${cliConfig.messages.success.created}`);
                                        break;
                                case 'Scss':
                                        nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${Colors.purple}`, { flag: 'a' });
                                        console.log(`${cliConfig.messages.success.created}`);
                                        break;
                                default:
                                        break;
                        }
                        break;
                case 'Red':
                        switch (extension) {
                                case 'Css':
                                        nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${Colors.red}`, { flag: 'a' });
                                        console.log(`${cliConfig.messages.success.created}`);
                                        break;
                                case 'Scss':
                                        nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${Colors.red}`, { flag: 'a' });
                                        console.log(`${cliConfig.messages.success.created}`);
                                        break;
                                default:
                                        break;
                        }
                        break;
                case 'White':
                        switch (extension) {
                                case 'Css':
                                        nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${Colors.white}`, { flag: 'a' });
                                        console.log(`${cliConfig.messages.success.created}`);
                                        break;
                                case 'Scss':
                                        nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${Colors.white}`, { flag: 'a' });
                                        console.log(`${cliConfig.messages.success.created}`);
                                        break;
                                default:
                                        break;
                        }
                        break;
                case 'Yello':
                        switch (extension) {
                                case 'Css':
                                        nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${Colors.yellow}`, { flag: 'a' });
                                        console.log(`${cliConfig.messages.success.created}`);
                                        break;
                                case 'Scss':
                                        nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${Colors.yellow}`, { flag: 'a' });
                                        console.log(`${cliConfig.messages.success.created}`);
                                        break;
                                default:
                                        break;
                        }
                        break;
                default:
                        break;
        }
}



export const cliPrompts = {
        directoryPrompt,
        extensionPrompt,
        colorSelectionPrompt,
        filenamePrompt,
        generateColorPlatte
};;
