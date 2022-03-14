import Big from 'big.js';
import Unit from '../constants/Unit';
import appleFormatter from './appleFormatter';

export default function mojoToCAT(mojo: string | number | Big): number {
  return appleFormatter(mojo, Unit.MOJO)
    .to(Unit.CAT)
    .toNumber();
}
