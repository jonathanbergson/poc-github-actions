export const getNumber = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString().slice(2);
  const month = currentDate.getMonth() + 1;
  const date = currentDate.getDate();

  return year + '.' + month + '.' + date;
}

export const getBranchName = () => {
  const version = getNumber()
  return `release/v${version}`
}

export const getPullRequestTitle = () => {
  const version = getNumber()
  return `release | v${version}`
}

export const getPullRequestStageTitle = () => {
  const prTitle = getPullRequestTitle()
  return `${prTitle} - merge in stage`
}
