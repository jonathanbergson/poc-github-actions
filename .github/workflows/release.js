export const getReleaseNumber = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString().slice(2);
  const month = currentDate.getMonth() + 1;
  const date = currentDate.getDate();

  return year + '.' + month + '.' + date;
}

export const getReleaseName = () => {
  const version = getReleaseNumber()
  return `release/v${version}`
}
