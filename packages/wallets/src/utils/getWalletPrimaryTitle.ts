import { WalletType } from '@apple/api';
import type { Wallet } from '@apple/api';

export default function getWalletPrimaryTitle(wallet: Wallet): string {
  switch (wallet.type) {
    case WalletType.STANDARD_WALLET:
      return 'Apple';
    default:
      return wallet.name;
  }
}
