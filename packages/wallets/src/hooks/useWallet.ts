import { useMemo } from 'react';
import { useGetWalletsQuery, useGetCatListQuery } from '@apple/api-react';
import { WalletType } from '@apple/api';
import type { Wallet } from '@apple/api';
import { useCurrencyCode } from '@apple/core';

export default function useWallet(walletId: number): {
  loading: boolean;
  wallet?: Wallet;
  unit?: string;
} {
  const currencyCode = useCurrencyCode();
  const { data: wallets, isLoading } = useGetWalletsQuery();
  const { data: catList = [], isLoading: isCatListLoading } = useGetCatListQuery();

  const wallet = useMemo(() => {
    return wallets?.find((item) => item.id === walletId);
  }, [wallets, walletId]);

  const unit = useMemo(() => {
    if (wallet) {
      if (!isCatListLoading && wallet.type === WalletType.CAT) {
        const token = catList.find((item) => item.assetId === wallet.meta?.assetId);
        if (token) {
          return token.symbol;
        }

        return undefined;
      }

      return currencyCode;
    }
  }, [wallet, currencyCode, isCatListLoading]);

  return {
    wallet,
    loading: isLoading,
    unit,
  };
}
