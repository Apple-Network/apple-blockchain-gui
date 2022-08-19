import { useMemo } from 'react';
import type { Wallet } from '@apple/api';
import { WalletType } from '@apple/api';
import BigNumber from 'bignumber.js';
import { mojoToCATLocaleString, mojoToAppleLocaleString, useLocale } from '@apple/core';

export default function useWalletHumanValue(wallet: Wallet, value?: string | number | BigNumber, unit?: string): string {
  const [locale] = useLocale();

  return useMemo(() => {
    if (wallet && value !== undefined) {
      const localisedValue = wallet.type === WalletType.CAT
        ? mojoToCATLocaleString(value, locale)
        : mojoToAppleLocaleString(value, locale);

      return `${localisedValue} ${unit}`;
    }

    return '';
  }, [wallet, value, unit, locale]);
}
