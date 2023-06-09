import { createAction } from 'redux-actions';
import api from '@/utils/apiClient';
import { showNotification } from '@/shared/components/Notification';

export const fetchCovidDataRequest = createAction('FETCH_COVID_DATA_REQUEST');
export const fetchCovidDataSuccess = createAction('FETCH_COVID_DATA_SUCCESS');
export const fetchCovidDataFailure = createAction('FETCH_COVID_DATA_FAILURE');

export const fetchCovidData = () => async (dispatch, getState) => {
  try {
    dispatch(fetchCovidDataRequest());
    const response = await api.covid.get();
    if (response && response.data) {
      const covidMapData = response.data.map(item => ({
        id: item.countryInfo.iso2,
        value: item.cases,
        name: item.country,
        deaths: item.deaths,
        recovered: item.recovered,
      }));

      dispatch(fetchCovidDataSuccess(covidMapData));
    }
  } catch (error) {
    // Your error notification
    const code = error.response?.status;
    const message = error.response?.statusText;

    if (code && message) {
      showNotification(
        getState().theme,
        getState().rtl,
        `Error Code: ${code}`,
        `Message: ${message}`,
      );
    }
    dispatch(fetchCovidDataFailure({ error }));
    throw error;
  }
};
