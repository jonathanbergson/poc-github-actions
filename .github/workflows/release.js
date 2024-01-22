module.exports.getNumber = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString().slice(2);
  const month = currentDate.getMonth() + 1;
  const date = currentDate.getDate();

  return year + '.' + month + '.' + date;
}

module.exports.getBranchName = () => {
  const version = getNumber()
  return `release/v${version}`
}

module.exports.getPullRequestTitle = () => {
  const version = getNumber()
  return `release | v${version}`
}

module.exports.getPullRequestStageTitle = () => {
  const prTitle = getPullRequestTitle()
  return `${prTitle} - merge in stage`
}
