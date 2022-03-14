import Big from 'big.js';
import Unit from '../constants/Unit';
import appleFormatter from './appleFormatter';

export default function mojoToCATLocaleString(mojo: string | number | Big) {
  return appleFormatter(Number(mojo), Unit.MOJO)
    .to(Unit.CAT)
    .toLocaleString();
}
