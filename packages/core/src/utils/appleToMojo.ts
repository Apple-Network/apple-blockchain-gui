import BigNumber from 'bignumber.js';
import Unit from '../constants/Unit';
import appleFormatter from './appleFormatter';

export default function appleToMojo(apple: string | number | BigNumber): BigNumber {
  return appleFormatter(apple, Unit.APPLE)
    .to(Unit.MOJO)
    .toBigNumber();
}
