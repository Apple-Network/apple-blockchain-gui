import type { Wallet } from '@apple/api';
import { WalletType } from '@apple/api';
import { mojoToCATLocaleString, mojoToAppleLocaleString } from '@apple/core';

export default function getWalletHumanValue(wallet: Wallet, value: number): string {
  return wallet.type === WalletType.CAT
    ? mojoToCATLocaleString(value)
    : mojoToAppleLocaleString(value);
}
