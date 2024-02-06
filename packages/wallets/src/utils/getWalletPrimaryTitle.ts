import { WalletType } from '@apple-network/api';
import type { Wallet } from '@apple-network/api';

export default function getWalletPrimaryTitle(wallet: Wallet): string {
  switch (wallet.type) {
    case WalletType.STANDARD_WALLET:
      return 'Apple';
    default:
      return wallet.meta?.name ?? wallet.name;
  }
}
