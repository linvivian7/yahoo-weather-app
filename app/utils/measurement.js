import { CELSIUS } from '../constants';

export const getIsMetric = (units) => units.temperature === CELSIUS;
