import PropTypes from 'prop-types';

const {
    string, shape, arrayOf, number,
} = PropTypes;

export const QuoteProps = shape({
    id: number,
    name: string,
    symbol: string,
    slug: string,
    quote: shape({
        price: number,
        volume_24h: number,
        volume_change_24h: number,
        percent_change_1h: number,
        percent_change_24h: number,
        percent_change_7d: number,
        percent_change_30d: number,
        market_cap: number,
        market_cap_dominance: number,
        fully_diluted_market_cap: number,
        last_updated: string,
    }),
});

export const CoinmarketcapQuotesProps = arrayOf(QuoteProps);

export const CryptoCurrencyProps = shape({
  first_historical_data: string,
  id: number,
  is_active: number,
  last_historical_data: string,
  name: string,
  platform: string,
  rank: number,
  slug: string,
  symbol: string,
});


// CMC - CoinMarketCap
export const CoinmarketcapMapProps = arrayOf(CryptoCurrencyProps);


