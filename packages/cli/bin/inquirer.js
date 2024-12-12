import inquirer from 'inquirer';

const english = /^[a-zA-Z]+$/

export const inquirerPrompt = (argv) => {
  const { name } = argv
  return new Promise((resolve, reject) => {
    inquirer.prompt([
      {
        type: 'input',
        message: 'please enter your project name',
        name,
        default: 'facile-cli-project',
        validate: (name) => {
          if (!english.test(name)) {
            return 'the project name must be in english'
          }
          return true
        }
      },
      {
        type: "list",
        message: "please select the front-end framework you are using",
        choices: ['vue', 'react'],
        name: 'framework'
      }
    ]).then(answers => {
      console.log(answers)
      const { framework } = answers
      if (framework === 'react') {
        inquirer.prompt([
          {
            type: 'list',
            message: 'please select your ui component library',
            choices: ['ant-design'],
            name: 'ui-liblary'
          }
        ]).then(frameworkAnswer => {
          resolve({
            ...answers,
            ...frameworkAnswer
          })
        }).catch(err => {
          reject(err)
        })
      }
      if (framework === 'vue') {
        inquirer.prompt([
          {
            type: 'list',
            message: 'please select your ui component library',
            choices: ['element'],
            name: 'ui-liblary'
          }
        ]).then(frameworkAnswer => {
          resolve({
            ...answers,
            ...frameworkAnswer
          })
        }).catch(err => {
          reject(err)
        })
      }
    }).catch(err => {
      reject(err)
    })
  })
}
