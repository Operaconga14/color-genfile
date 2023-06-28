const yargs = require('yargs');

yargs
  .usage('Usage: <cfg>')
  .option('cfg', {
    alias: 'cfg',
    describe: 'to Create your file',
    demandOption: true,
  })
  .showVersion()
  .showHidden
  .argv;
