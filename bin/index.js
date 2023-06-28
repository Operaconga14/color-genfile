#!/usr/bin/env node
const figlet = require('figlet');
const inquirer = require('inquirer');
const time = require('timers');
const yargs = require('yargs');

const commands = {
  start: 'cfg',
};

const messages = {
  welcome: {
    greetings: 'Welcome',
    appreciation: 'Thank you For Installing me 👍',
  },
  goodbye: {
    comeagain: 'You can use me globally with the command',
    goodbye: `Thank You! don't hesitate to use me again and if you want to support you can go to my page ${'https://www.google.com'}`,
  },

};
figlet('Color - Gen CLi', (err, data) => {
  if (err) {
    console.log(('Something went wrong....... restart your terminal and try again'));
    console.dir(err);
    return;
  }
  console.log(data);

  const command = require('./commands.js');

  time.setTimeout(() => {
    console.log(`\n${messages.welcome.greetings}`);
    console.log('\nDo you want to generate a CSS Or SCSS file with different colors codes in it? \nWe got you covered');
    console.log('Answer few question and selection and leave the rest to us we should create that file for you.\n');
  }, 800);

  time.setTimeout(() => {
    const start = require('./start.js');
  }, 3000);
});
