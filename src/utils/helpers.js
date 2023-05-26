export const getOidcStorageKey = () => {
  const authSettings = JSON.parse(localStorage.getItem('authSettings'));
  if (authSettings) {
    return `oidc.user:${authSettings.auth_server}:${authSettings.client_id}`;
  }
  return null;
};

export const getOidcInfo = () => {
  const key = getOidcStorageKey();
  if (key) {
    const oidc = JSON.parse(localStorage.getItem(key));
    return oidc;
  }
  return null;
};

export const getToken = () => {
  const oidc = getOidcInfo();
  if (oidc) {
    return oidc.id_token;
  }
  return null;
};

const getDay = (date) => {
  if (!date) return '';
  return `${new Date(date)?.getDate()}`;
};

const getValue = (price) => {
  if (Number.isNaN(price)) return 0;
  return Number(price).toFixed(2);
};

const getNameAndValueArr = history => history.map(day => ({
  name: getDay(day?.date),
  value: getValue(day.priceUsd),
}));

export const getWeekChartData = (cryptoHistory) => {
  if (!cryptoHistory) return null;

  const weekChartDataArr = cryptoHistory?.map(item => ({
    currency: item?.currency,
    history: getNameAndValueArr(item?.history.slice(7, item?.history.length)),
  }));

  return Object.fromEntries(weekChartDataArr.map(item => [item.currency, item.history]));
};
