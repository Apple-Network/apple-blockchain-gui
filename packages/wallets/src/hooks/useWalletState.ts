import { useGetSyncStatusQuery } from '@apple/api-react';
import { SyncingStatus } from '@apple/api';
import getWalletSyncingStatus from '../utils/getWalletSyncingStatus';

export default function useWalletState(): {
  isLoading: boolean;
  state?: SyncingStatus;
} {
  const { data: walletState, isLoading } = useGetSyncStatusQuery();

  return {
    isLoading,
    state: walletState && getWalletSyncingStatus(walletState),
  }
}
