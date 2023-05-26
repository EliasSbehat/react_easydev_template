import { get } from './base/index';

// Available api requests here: "https://documenter.getpostman.com/view/8854915/SzS7R6uu?version=latest"
export default {
  get: (data) => {
    const params = { ...data };
    return get('https://disease.sh/v2/countries', { params });
  },
};
