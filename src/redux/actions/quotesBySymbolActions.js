import { createAction } from 'redux-actions';
import coinmarketcapApi from '@/utils/api/coinmarketcapApi';
import { firstLetterToUpperCase } from '@/shared/helpers';

export const fetchQuotesBySymbolRequest = createAction(
  'FETCH_QUOTES_BY_SYMBOL_REQUEST',
);
export const fetchQuotesBySymbolSuccess = createAction(
  'FETCH_QUOTES_BY_SYMBOL_SUCCESS',
);
export const fetchQuotesBySymbolError = createAction(
  'FETCH_QUOTES_BY_SYMBOL_ERROR',
);

export const fetchQuotesBySymbol = symbol => async (dispatch) => {
  try {
    dispatch(fetchQuotesBySymbolRequest());
    const { data } = await coinmarketcapApi.getQuotesBySymbol(symbol);
    // remove "binkies" with simillar symbol: "ETH"
    data.data.ETH = data.data.ETH.filter(el => el.slug === 'ethereum');

    dispatch(fetchQuotesBySymbolSuccess(data.data));
  } catch (e) {
    dispatch(
      fetchQuotesBySymbolError(
        firstLetterToUpperCase(
          e.response?.data?.error
            || e.response?.statusText,
        ),
      ),
    );
  }
};
