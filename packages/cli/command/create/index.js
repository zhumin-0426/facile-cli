const fs = require('fs-extra')
const inquirer = require('inquirer');
import Creator from './Creator';

async function create(name) {
  const exists = await fs.pathExists(`${process.cwd()}\\${name}`)
  if (exists) {
    inquirer.prompt([
      {
        type: 'list',
        message: "please select the front-end framework you are using",
        choices: ['overwrite', 'merge', 'cancel'],
        name: "action"
      }
    ]).then(answers => {
      const { action } = answers
      if(action === 'cancel' || action === 'merge'){
         return;
      }
      if (action === 'overwrite') {
        fs.removeSync(`${process.cwd()}\\${name}`)
      }
    })
  }

  const creator = new Creator(name)
  creator.create(name)

  inquirer.prompt([
    {
      type: "list",
      message: "please select the front-end framework you are using",
      choices: ['vue', 'react'],
      name: 'framework'
    },
    {
      type: "list",
      message: "please select a warehouse management method,monorepo?",
      choices: ['single', 'double'],
      name: 'warehouse'
    }
  ]).then(answers => {
    console.log(answers)
  })
}

module.exports = create
