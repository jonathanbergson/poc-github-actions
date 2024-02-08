const { Document, marks } = require('adf-builder');

const user = [
  {
    github: 'jonathanbergson',
    jira: 'jonathanbergson',
    jiraID: '6140cc7a54762c0069355ad7',
    slack: 'jonathanbergson',
  }
]

const createJiraCommentEndpoint = (prTitle) => {
  const cardNumber = getJiraCardNumberWithPrefix(prTitle);
  return `https://trackco.atlassian.net/rest/api/3/issue/${cardNumber}/comment`
}

const getJiraUserId = (githubUsername) => {
  const user = user.find(u => u.github === githubUsername);
  return user ? user.jiraID : '';
}

const getJiraUserMention = (githubUsername) => {
  const user = user.find(u => u.github === githubUsername);
  return user ? user.jira : '';
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
  const panel = doc
    .panel('info')
    .paragraph()

  panel
    .emoji(':pushpin:')
    .text(' PR de FRONT: ', marks().strong())
    .text(`#${prId}`, marks().strong())

  console.log('assignees', assignees)
  console.log('reviewers', reviewers)

  if (assignees.length > 0) {
    const a = panel.text('Assignees: ')

    assignees.forEach((assignee, index) => {
      a.mention(getJiraUserId(assignee), getJiraUserMention(assignee))
      if (index < assignees.length - 1) {
        a.text(', ')
      }
    });

    a.text('\n')
  }

  if (reviewers.length > 0) {
    const r = panel.text('Reviewers: ')

    reviewers.forEach((reviewer, index) => {
      r.mention(getJiraUserId(reviewer), getJiraUserMention(reviewer))
      if (index < reviewers.length - 1) {
        r.text(', ')
      }
    });

    r.text('\n')
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
