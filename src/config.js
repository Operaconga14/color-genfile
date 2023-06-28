const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const time = require('timers');
const reds = require('./colors/red');
const blue = require('./colors/blue');
const brown = require('./colors/brown');
const yellow = require('./colors/yellow');
const white = require('./colors/white');
const black = require('./colors/black');
const purple = require('./colors/purple');
const green = require('./colors/green');
const pink = require('./colors/pink');
const orange = require('./colors/orange');

const extentions = {
  Css: '.css',
  Scss: '.scss',
};

inquirer
  .prompt(
    {
      type: 'text',
      name: 'filepath',
      message: 'Location where the file would be',
      default: path.basename(process.cwd()),
    },
  )
  .then((answers) => {
    const projectdir = `${process.cwd()}/`;
    const desirefld = `${answers.filepath}/`;
    const singledir = `${answers.filepath}`;

    if (fs.existsSync(projectdir)) {
      // To check if th desired directory exist
      if (!fs.existsSync(desirefld)) {
        console.error(`\n${singledir} directory does not exsit \nchoose a working directory`);
      } else {
        // next step to create file naem and extention
        inquirer
          .prompt([
            {
              type: 'list',
              name: 'fileextension',
              message: 'Choose your file extention',
              choices: ['Css', 'Scss'],
            },
            {
              type: 'text',
              name: 'filename',
              message: 'Give your file a name',
              default: 'colors',
            },
            {
              type: 'list',
              name: 'color',
              message: 'Choose The color you want for your project',
              choices: ['Red', 'Blue', 'Orange', 'Brown', 'Green', 'Purple', 'Pink', 'White', 'Black', 'Yellow'],
            },
          ])
          .then((answers) => {
            const filename = `${answers.filename}`;
            const fileext = `${answers.fileextension}`;
            const chossencolor = `${answers.color}`;

            // For Color Selection
            switch (chossencolor) {
              case 'Red':
                switch (fileext) {
                  case 'Css':

                    fs.writeFileSync(desirefld + filename + extentions.Css, `${reds}`, { flag: 'a' });
                    break;
                  case 'Scss':

                    fs.writeFileSync(desirefld + filename + extentions.Scss, `${reds}`, { flag: 'a' });
                    break;
                  default:
                    break;
                }

                time.setTimeout(() => {
                  console.log('\nCreating File and generating color...... ');
                }, 600);

                time.setTimeout(() => {
                  console.log('\n File generated successfuly 👍');
                }, 800);
                break;

                // Color Blue
              case 'Blue':
                switch (fileext) {
                  case 'Css':

                    fs.writeFileSync(desirefld + filename + extentions.Css, `${blue}`, { flag: 'a' });
                    break;
                  case 'Scss':

                    fs.writeFileSync(desirefld + filename + extentions.Scss, `${blue}`, { flag: 'a' });
                    break;
                  default:
                    break;
                }

                time.setTimeout(() => {
                  console.log('\nCreating File and generating color...... ');
                }, 600);

                time.setTimeout(() => {
                  console.log('\n File generated successfuly 👍');
                }, 800);
                break;

                // Color Orange
              case 'Orange':
                switch (fileext) {
                  case 'Css':

                    fs.writeFileSync(desirefld + filename + extentions.Css, `${orange}`, { flag: 'a' });
                    break;
                  case 'Scss':

                    fs.writeFileSync(desirefld + filename + extentions.Scss, `${orange}`, { flag: 'a' });
                    break;
                  default:
                    break;
                }

                time.setTimeout(() => {
                  console.log('\nCreating File and generating color...... ');
                }, 600);

                time.setTimeout(() => {
                  console.log('\n File generated successfuly 👍');
                }, 800);
                break;

                // Color Brown
              case 'Brown':
                switch (fileext) {
                  case 'Css':

                    fs.writeFileSync(desirefld + filename + extentions.Css, `${brown}`, { flag: 'a' });
                    break;
                  case 'Scss':

                    fs.writeFileSync(desirefld + filename + extentions.Scss, `${brown}`, { flag: 'a' });
                    break;
                  default:
                    break;
                }

                time.setTimeout(() => {
                  console.log('\nCreating File and generating color...... ');
                }, 600);

                time.setTimeout(() => {
                  console.log('\n File generated successfuly 👍');
                }, 800);
                break;

                // Color Green
              case 'Green':
                switch (fileext) {
                  case 'Css':

                    fs.writeFileSync(desirefld + filename + extentions.Css, `${green}`, { flag: 'a' });
                    break;
                  case 'Scss':

                    fs.writeFileSync(desirefld + filename + extentions.Scss, `${green}`, { flag: 'a' });
                    break;
                  default:
                    break;
                }

                time.setTimeout(() => {
                  console.log('\nCreating File and generating color...... ');
                }, 600);

                time.setTimeout(() => {
                  console.log('\n File generated successfuly 👍');
                }, 800);
                break;

                // Color Purple
              case 'Purple':
                switch (fileext) {
                  case 'Css':

                    fs.writeFileSync(desirefld + filename + extentions.Css, `${purple}`, { flag: 'a' });
                    break;
                  case 'Scss':

                    fs.writeFileSync(desirefld + filename + extentions.Scss, `${purple}`, { flag: 'a' });
                    break;
                  default:
                    break;
                }

                time.setTimeout(() => {
                  console.log('\nCreating File and generating color...... ');
                }, 600);

                time.setTimeout(() => {
                  console.log('\n File generated successfuly 👍');
                }, 800);
                break;

                // Color Pink
              case 'Pink':
                switch (fileext) {
                  case 'Css':

                    fs.writeFileSync(desirefld + filename + extentions.Css, `${pink}`, { flag: 'a' });
                    break;
                  case 'Scss':

                    fs.writeFileSync(desirefld + filename + extentions.Scss, `${pink}`, { flag: 'a' });
                    break;
                  default:
                    break;
                }

                time.setTimeout(() => {
                  console.log('\nCreating File and generating color...... ');
                }, 600);

                time.setTimeout(() => {
                  console.log('\n File generated successfuly 👍');
                }, 800);
                break;

                // Color White
              case 'White':
                switch (fileext) {
                  case 'Css':

                    fs.writeFileSync(desirefld + filename + extentions.Css, `${white}`, { flag: 'a' });
                    break;
                  case 'Scss':

                    fs.writeFileSync(desirefld + filename + extentions.Scss, `${white}`, { flag: 'a' });
                    break;
                  default:
                    break;
                }

                time.setTimeout(() => {
                  console.log('\nCreating File and generating color...... ');
                }, 600);

                time.setTimeout(() => {
                  console.log('\n File generated successfuly 👍');
                }, 800);
                break;

                // Color Black
              case 'Black':
                switch (fileext) {
                  case 'Css':

                    fs.writeFileSync(desirefld + filename + extentions.Css, `${black}`, { flag: 'a' });
                    break;
                  case 'Scss':

                    fs.writeFileSync(desirefld + filename + extentions.Scss, `${black}`, { flag: 'a' });
                    break;
                  default:
                    break;
                }

                time.setTimeout(() => {
                  console.log('\nCreating File and generating color...... ');
                }, 600);

                time.setTimeout(() => {
                  console.log('\n File generated successfuly 👍');
                }, 800);
                break;

                // Color Yellow
              case 'Yellow':
                switch (fileext) {
                  case 'Css':

                    fs.writeFileSync(desirefld + filename + extentions.Css, `${yellow}`, { flag: 'a' });
                    break;
                  case 'Scss':

                    fs.writeFileSync(desirefld + filename + extentions.Scss, `${yellow}`, { flag: 'a' });
                    break;
                  default:
                    break;
                }

                time.setTimeout(() => {
                  console.log('\nCreating File and generating color...... ');
                }, 600);

                time.setTimeout(() => {
                  console.log('\n File generated successfuly 👍');
                }, 800);
                break;

              default:
                break;
            }
          });
      }
    }
  });
