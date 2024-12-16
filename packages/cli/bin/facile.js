#!/usr/bin/env node
const process = require('process')
const path = require('path')
const yargs = require('yargs')
const { program } = require('commander');
const { hideBin } = require('yargs/helpers')
const fse = require('fs-extra')
const { inquirerPrompt } = require('./inquirer.js')

program.command('create <app-name>')
  .description('create facile cli project')
  .action((name) => {
    require('../command/create/index.js')(name)
  })

program.parse()


// yargs(hideBin(process.argv)).command('create', 'create facile cli project',
//   function (yargs) {
//     return yargs.option(
//       'name',
//       {
//         alias: 'n',
//         describe: 'this field is the name of the created project',
//       }
//     )
//   },
//   function (argv) {
//     inquirerPrompt(argv).then(async answers => {
//       console.log("answers", answers)
//       const { orderPageclscls } = answers
//       const exists = await fse.pathExists(`${process.cwd()}\\${orderPageclscls}`)
//       if (exists) {
//         throw Error('已经存在')
//       }
//       const isCopy = fse.copySync(
//         path.resolve(__dirname, '../../../temp/vue3'),
//         path.resolve(process.cwd(), './vue3')
//       )
//       console.log(isCopy)
//     })
//   }
// )
//   .demandOption('name', 'the project name is required')
//   .argv
