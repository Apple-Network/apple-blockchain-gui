import Big from 'big.js';
import Unit from '../constants/Unit';
import appleFormatter from './appleFormatter';

export default function appleToMojo(apple: string | number | Big): number {
  return appleFormatter(apple, Unit.APPLE)
    .to(Unit.MOJO)
    .toNumber();
}
