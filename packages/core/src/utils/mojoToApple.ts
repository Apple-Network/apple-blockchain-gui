import Big from 'big.js';
import Unit from '../constants/Unit';
import appleFormatter from './appleFormatter';

export default function mojoToApple(mojo: string | number | Big): number {
  return appleFormatter(mojo, Unit.MOJO)
    .to(Unit.APPLE)
    .toNumber();
}
