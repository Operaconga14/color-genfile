import commander from 'commander';
import figlet from 'figlet';
import * as fs from 'fs';
import inquirer from 'inquirer';
import * as path from 'path';
import * as time from 'timers';
import yargs from 'yargs';
import { Colors } from '../colors';


export const nodeConfig = {
        fs,
        inquirer,
        path,
        time,
        Colors,
        figlet,
        yargs,
        commander
};
