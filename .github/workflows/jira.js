const { Document } = require('adf-builder');

const createJiraCommentEndpoint = (prTitle) => {
  const cardNumber = getJiraCardNumberWithPrefix(prTitle);
  return `https://trackco.atlassian.net/rest/api/3/issue/${cardNumber}/comment`
}

const getJiraCardNumber = (prTitle) => {
  let match = prTitle.match(/\((\S+)-(\d{4})\)/);
  return match ? match[2] : null;
}

const getJiraCardNumberWithPrefix = (prTitle) => {
  const prefix = 'CXM-';
  return prefix + getJiraCardNumber(prTitle);
}

const pullRequestCreated = (prId) => {
  const doc = new Document();

  doc
    .panel('info')
    .paragraph()
    .text('Pull Request criado: \n\n')
    .text('Assignees: @jonathanbergson \n')
    .text('Link: ')
    .link(`https://github.com/Tracksale/cxm-app/pull/${prId}`, `https://github.com/Tracksale/cxm-app/pull/${prId}`)

  return doc.toJSON();
};

module.exports = {
  createJiraCommentEndpoint,
  getJiraCardNumber,
  getJiraCardNumberWithPrefix,
  pullRequestCreated,
};
