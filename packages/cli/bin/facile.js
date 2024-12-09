#!/usr/bin/env node
const yargs = require('yargs');
console.log('11111name', yargs.argv);
console.log(require('yargs/yargs')(process.argv.slice(2)).parse().alias)
