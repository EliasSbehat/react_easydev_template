export const getDateDaysBack = (daysBack = 7) => {
  const now = new Date();

  return new Date(now.getFullYear(), now.getMonth(), now.getDate() - daysBack);
};

export const padTo2Digits = num => num.toString().padStart(2, '0');

export const getDayAndMonth = (date) => {
  const d = new Date(date);
  const res = `${d.getDate()}.${padTo2Digits(d.getMonth() + 1)}`;
  return res;
};

export const getDatesFromYesterdayArr = (daysNumber = 14) => {
  const dates = [];

  for (let i = 1; i <= daysNumber; i += 1) {
    dates.push(getDayAndMonth(getDateDaysBack(i)));
  }

  return dates;
};
