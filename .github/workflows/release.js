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

module.exports = {
  getNumber,
  getBranchName,
  getPullRequestTitle,
  getPullRequestStageTitle
}
