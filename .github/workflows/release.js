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

const createPullRequestDescriptionLine = (item) => {
  let line = '';

  if (item.jiraCard) {
    line += `[CXM-${item.jiraCard}](https://trackco.atlassian.net/browse/CXM-${item.jiraCard}) `;
  }
  if (item.prAuthor && item.prAuthor.length > 0) {
    item.prAuthor.forEach((author, index) => {
      line += `@${author} `;
    });
  }
  if (item.prNumber) {
    line += `#${item.prNumber}`;
  }

  if (line) {
    line = '- ' + line + '\n';
  }

  return line;
}

const createPullRequestDescription = (pulls = []) => {
  console.log('pulls', pulls);
  let description = `## 🎉 Lista de demandas:\n\n`;
  const bugfix = [], hotfix = [], feat= [], tech = [], extra = [];


  pulls.forEach(item => {
    if (/^bugfix/.test(item.prTitle)) {
      bugfix.push(item);
    } else if (/^hotfix/.test(item.prTitle)) {
      hotfix.push(item);
    } else if (/^feat/.test(item.prTitle)) {
      feat.push(item);
    } else if (/^tech/.test(item.prTitle)) {
      tech.push(item);
    } else {
      extra.push(item);
    }
  });

  if (hotfix.length > 0) {
    description += '#### Hotfix\n';
    hotfix.forEach(item => {
      description += createPullRequestDescriptionLine(item);
    });
  }

  if (bugfix.length > 0) {
    description += '#### Bugfix\n';
    bugfix.forEach(item => {
      description += createPullRequestDescriptionLine(item);
    });
  }

  if (feat.length > 0) {
    description += '#### Features\n';
    feat.forEach(item => {
      description += createPullRequestDescriptionLine(item);
    });
  }

  if (tech.length > 0) {
    description += '#### Tech\n';
    tech.forEach(item => {
      description += createPullRequestDescriptionLine(item);
    });
  }

  if (extra.length > 0) {
    description += '#### Extra\n';
    extra.forEach(item => {
      description += createPullRequestDescriptionLine(item);
    });
  }

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
