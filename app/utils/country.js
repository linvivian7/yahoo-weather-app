import { COUNTRY_ISO_CODES } from '../constants';

export const getCountryCode = (countryName) => COUNTRY_ISO_CODES[countryName] || '';
