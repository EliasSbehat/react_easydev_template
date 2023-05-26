import { get } from './base/index';
import { apiUrl } from './base/axios';

// Available api doc: "https://coinmarketcap.com/api/documentation/v1/#section/Quick-Start-Guide"
export default {
  getListingsLatest: (limit = 10, sort = 'market_cap') => {
    const params = {
      limit,
      sort,
    };
    return get(`${apiUrl}/coinmarket/v1/cryptocurrency/listings/latest`, { params });
  },
  getQuotesBySymbol: (symbol) => {
    const params = { symbol };

    return get(`${apiUrl}/coinmarket/v2/cryptocurrency/quotes/latest`, { params });
  },
  getGlobalQuotes: () => get(`${apiUrl}/coinmarket/v1/global-metrics/quotes/latest`),
};
