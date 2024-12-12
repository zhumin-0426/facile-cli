#!/usr/bin/env node
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { inquirerPrompt } from './inquirer.js'

import { cwd } from 'process'

console.log(cwd())

yargs(hideBin(process.argv)).command('create', 'create facile cli project',
  function (yargs) {
    return yargs.option(
      'name',
      {
        alias: 'n',
        describe: 'this field is the name of the created project',
      }
    )
  },
  function (argv) {
    inquirerPrompt(argv).then(answers => {
      console.log("answers",answers)
    })
  }
)
  .demandOption('name', 'the project name is required')
  .argv
