const {Document} = require('adf-builder');

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
  pullRequestCreated,
};
