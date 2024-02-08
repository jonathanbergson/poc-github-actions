const {Document} = require('adf-builder');

const getJiraCardNumber = (prTitle) => {
  let match = prTitle.match(/\((\S+)-(\d{4})\)/);
  return match ? match[2] : null;
}

const getJiraCardNumberWithPrefix = (prTitle) => {
  const prefix = 'CXM-';
  return prefix + getJiraCardNumber(prTitle);
}

const pullRequestCreated = () => {
  const doc = new Document();

  doc
    .panel('info')
    .paragraph()
    .text('Pull Request criado: \n')
    .text('Assignees: @jonathanbergson \n')
    .text('Link: ')
    .link('https://github.com/Tracksale/cxm-app/pull/1507',  'https://github.com/Tracksale/cxm-app/pull/1507')

  return doc.toJSON();
};

module.exports = {
  getJiraCardNumber,
  getJiraCardNumberWithPrefix,
  pullRequestCreated,
};
