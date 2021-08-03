import type CoinSpend from './CoinSpend';
import type G2Element from './G2Element';

type SpendBundle = {
  coin_spends: CoinSpend[];
  aggregated_signature: G2Element;
};

export default SpendBundle;
