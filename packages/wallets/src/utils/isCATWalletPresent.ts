import type { Wallet, CATToken } from '@apple-network/api';
import { WalletType } from '@apple-network/api';

export default function isCATWalletPresent(wallets: Wallet[], token: CATToken): boolean {
  return !!wallets?.find((wallet) => {
    if ([WalletType.CAT, WalletType.CRCAT].includes(wallet.type) && wallet.meta?.assetId === token.assetId) {
      return true;
    }

    return false;
  });
}
