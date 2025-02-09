/**
 * Quasar App Extension prompts script
 *
 * Inquirer prompts
 * (answers are available as "api.prompts" in the other scripts)
 * https://www.npmjs.com/package/inquirer#question
 *
 */

module.exports = function () {
  return [
    {
      name: 'options',
      type: 'checkbox',
      required: true,
      message:
        'Cypress e2e and component Test Harness will now be installed. Please choose additional options:',
      choices: [
        {
          name: 'extra "scripts" in your package.json',
          value: 'scripts',
          checked: true,
        },
        {
          name: 'enable TypeScript support',
          value: 'typescript',
        },
        {
          name: 'enable code coverage (currently only supported using Vite, not Webpack)',
          value: 'code-coverage',
        },
      ],
    },
  ];
};
