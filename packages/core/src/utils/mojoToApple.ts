import BigNumber from 'bignumber.js';

import Unit from '../constants/Unit';

import appleFormatter from './appleFormatter';

export default function mojoToApple(mojo: string | number | BigNumber): BigNumber {
  return appleFormatter(mojo, Unit.MOJO).to(Unit.APPLE).toBigNumber();
}
