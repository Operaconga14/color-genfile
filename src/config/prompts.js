"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cliPrompts = void 0;
const colors_1 = require("../colors");
const cli_config_1 = require("./cli_config");
const node_config_1 = require("./node_config");
// Next prompt is the directory prompt\
function directoryPrompt() {
    node_config_1.nodeConfig.inquirer
        .prompt([
        {
            type: 'text',
            name: 'filepath',
            message: 'Location where the file would be',
            default: node_config_1.nodeConfig.path.basename(process.cwd()),
        }
    ])
        .then(answer => {
        const projectdir = `${process.cwd()}/`;
        const desirefld = `${answer.filepath}/`;
        const singledir = node_config_1.nodeConfig.path.join(`${projectdir}${desirefld}`);
        console.log(singledir);
        // call the next prompt function
        filenamePrompt(`${singledir}`);
    });
}
// filename prompt
function filenamePrompt(directory) {
    node_config_1.nodeConfig.inquirer
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
function extensionPrompt(directory, filename) {
    node_config_1.nodeConfig.inquirer
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
function colorSelectionPrompt(directory, filename, extension) {
    node_config_1.nodeConfig.inquirer
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
function generateColorPlatte(directory, filename, extension, choosencolor) {
    // const fullpath = `${directory}${filename}.${extension.toLowerCase()}`;
    const fullpathj = node_config_1.nodeConfig.path.join(directory, `${filename}.${extension.toLowerCase()}`);
    console.log(fullpathj);
    console.log(`Creating file at: ${fullpathj}...`);
    switch (choosencolor) {
        case 'Black':
            switch (extension) {
                case 'Css':
                    node_config_1.nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${colors_1.Colors.black}`, { flag: 'a' });
                    console.log(`${cli_config_1.cliConfig.messages.success.created}`);
                    break;
                case 'Scss':
                    node_config_1.nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${colors_1.Colors.black}`, { flag: 'a' });
                    console.log(`${cli_config_1.cliConfig.messages.success.created}`);
                    break;
                default:
                    break;
            }
            break;
        case 'Blue':
            switch (extension) {
                case 'Css':
                    node_config_1.nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${colors_1.Colors.blue}`, { flag: 'a' });
                    console.log(`${cli_config_1.cliConfig.messages.success.created}`);
                    break;
                case 'Scss':
                    node_config_1.nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${colors_1.Colors.blue}`, { flag: 'a' });
                    console.log(`${cli_config_1.cliConfig.messages.success.created}`);
                    break;
                default:
                    break;
            }
            break;
        case 'Brown':
            switch (extension) {
                case 'Css':
                    node_config_1.nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${colors_1.Colors.brown}`, { flag: 'a' });
                    console.log(`${cli_config_1.cliConfig.messages.success.created}`);
                    break;
                case 'Scss':
                    node_config_1.nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${colors_1.Colors.brown}`, { flag: 'a' });
                    console.log(`${cli_config_1.cliConfig.messages.success.created}`);
                    break;
                default:
                    break;
            }
            break;
        case 'Green':
            switch (extension) {
                case 'Css':
                    node_config_1.nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${colors_1.Colors.green}`, { flag: 'a' });
                    console.log(`${cli_config_1.cliConfig.messages.success.created}`);
                    break;
                case 'Scss':
                    node_config_1.nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${colors_1.Colors.green}`, { flag: 'a' });
                    console.log(`${cli_config_1.cliConfig.messages.success.created}`);
                    break;
                default:
                    break;
            }
            break;
        case 'Orange':
            switch (extension) {
                case 'Css':
                    node_config_1.nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${colors_1.Colors.orange}`, { flag: 'a' });
                    console.log(`${cli_config_1.cliConfig.messages.success.created}`);
                    break;
                case 'Scss':
                    node_config_1.nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${colors_1.Colors.orange}`, { flag: 'a' });
                    console.log(`${cli_config_1.cliConfig.messages.success.created}`);
                    break;
                default:
                    break;
            }
            break;
        case 'Pink':
            switch (extension) {
                case 'Css':
                    node_config_1.nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${colors_1.Colors.pink}`, { flag: 'a' });
                    console.log(`${cli_config_1.cliConfig.messages.success.created}`);
                    break;
                case 'Scss':
                    node_config_1.nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${colors_1.Colors.pink}`, { flag: 'a' });
                    console.log(`${cli_config_1.cliConfig.messages.success.created}`);
                    break;
                default:
                    break;
            }
            break;
        case 'Purple':
            switch (extension) {
                case 'Css':
                    node_config_1.nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${colors_1.Colors.purple}`, { flag: 'a' });
                    console.log(`${cli_config_1.cliConfig.messages.success.created}`);
                    break;
                case 'Scss':
                    node_config_1.nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${colors_1.Colors.purple}`, { flag: 'a' });
                    console.log(`${cli_config_1.cliConfig.messages.success.created}`);
                    break;
                default:
                    break;
            }
            break;
        case 'Red':
            switch (extension) {
                case 'Css':
                    node_config_1.nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${colors_1.Colors.red}`, { flag: 'a' });
                    console.log(`${cli_config_1.cliConfig.messages.success.created}`);
                    break;
                case 'Scss':
                    node_config_1.nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${colors_1.Colors.red}`, { flag: 'a' });
                    console.log(`${cli_config_1.cliConfig.messages.success.created}`);
                    break;
                default:
                    break;
            }
            break;
        case 'White':
            switch (extension) {
                case 'Css':
                    node_config_1.nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${colors_1.Colors.white}`, { flag: 'a' });
                    console.log(`${cli_config_1.cliConfig.messages.success.created}`);
                    break;
                case 'Scss':
                    node_config_1.nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${colors_1.Colors.white}`, { flag: 'a' });
                    console.log(`${cli_config_1.cliConfig.messages.success.created}`);
                    break;
                default:
                    break;
            }
            break;
        case 'Yello':
            switch (extension) {
                case 'Css':
                    node_config_1.nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${colors_1.Colors.yellow}`, { flag: 'a' });
                    console.log(`${cli_config_1.cliConfig.messages.success.created}`);
                    break;
                case 'Scss':
                    node_config_1.nodeConfig.fs.writeFileSync(directory + filename + `.${extension.toLowerCase()}`, `${colors_1.Colors.yellow}`, { flag: 'a' });
                    console.log(`${cli_config_1.cliConfig.messages.success.created}`);
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
}
exports.cliPrompts = {
    directoryPrompt,
    extensionPrompt,
    colorSelectionPrompt,
    filenamePrompt,
    generateColorPlatte
};
;
