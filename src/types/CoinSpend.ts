import type Coin from './Coin';
import type Program from './Program';

type CoinSpend = {
  coin: Coin;
  solution: Program;
};

export default CoinSpend;
