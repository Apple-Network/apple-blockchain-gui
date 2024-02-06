import BigNumber from 'bignumber.js';

import Unit from '../constants/Unit';

import appleFormatter from './appleFormatter';

export default function mojoToCATLocaleString(mojo: string | number | BigNumber, locale?: string) {
  return appleFormatter(mojo, Unit.MOJO).to(Unit.CAT).toLocaleString(locale);
}
