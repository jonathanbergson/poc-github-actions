const { Document, marks } = require('adf-builder');

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

const pullRequestCreated = (prId, assignees = [], reviewers = []) => {
  const doc = new Document();
  const panel = doc.panel('info')

  panel
    .paragraph()
    .emoji(':pushpin:')
    .text(' PR de FRONT:', marks().strong())

  panel.paragraph()

  if (assignees.length > 0) {
    panel
      .text('Assignees: ')
      .mention('6140cc7a54762c0069355ad7', 'jonathanbergson')
      .text('\n')
  }

  if (reviewers.length > 0) {
    panel
      .text('Reviewers: ')
      .mention('6140cc7a54762c0069355ad7', 'jonathanbergson')
      .text('\n')
  }

  panel
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
