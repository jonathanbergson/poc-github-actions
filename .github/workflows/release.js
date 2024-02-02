const getNumber = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString().slice(2);
  const month = currentDate.getMonth() + 1;
  const date = currentDate.getDate();

  return year + '.' + month + '.' + date;
}

const getBranchName = () => {
  const version = getNumber()
  return `release/v${version}`
}

const getPullRequestTitle = () => {
  const version = getNumber()
  return `release | v${version}`
}

const getPullRequestStageTitle = () => {
  const prTitle = getPullRequestTitle()
  return `${prTitle} - merge in stage`
}

const getJiraCardNumber = (prTitle) => {
  let match = prTitle.match(/\((\S+)-(\d{4})\)/);
  return match ? match[2] : null;
}

const createPullRequestDescription = (pulls = []) => {
  console.log('pulls', pulls);
  let description = `## 🎉 Lista de demandas:\n\n`;

  pulls.forEach(item => {
    let line = '';

    if (item.jiraCard) {
      line += `[CXM-${item.jiraCard}](https://trackco.atlassian.net/browse/CXM-${item.jiraCard})`;
    }
    if (item.prAuthor) {
      line += `@${item.prAuthor} `;
    }
    if (item.prNumber) {
      line += `#${item.prNumber}`;
    }

    if (line) {
      description += '- ' + line + '\n';
    }
  });

  return description;
}

module.exports = {
  createPullRequestDescription,
  getNumber,
  getBranchName,
  getJiraCardNumber,
  getPullRequestTitle,
  getPullRequestStageTitle
}
