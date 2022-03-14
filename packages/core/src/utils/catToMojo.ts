import Big from 'big.js';
import Unit from '../constants/Unit';
import appleFormatter from './appleFormatter';

export default function catToMojo(cat: string | number | Big): number {
  return appleFormatter(cat, Unit.CAT)
    .to(Unit.MOJO)
    .toNumber();
}
