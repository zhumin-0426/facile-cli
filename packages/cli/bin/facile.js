#!/usr/bin/env node
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

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
    console.log('argv', argv)
  }
)
  .demandOption('name', 'the project name is required')
  .argv
