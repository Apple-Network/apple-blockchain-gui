import React, { useMemo } from 'react';
import { Trans } from '@lingui/macro';
import { useCurrencyCode, mojoToAppleLocaleString, CardSimple } from '@apple/core';
import { useGetFarmedAmountQuery } from '@apple/api-react';

export default function FarmCardTotalAppleFarmed() {
  const currencyCode = useCurrencyCode();
  const { data, isLoading, error } = useGetFarmedAmountQuery();

  const farmedAmount = data?.farmedAmount;

  const totalAppleFarmed = useMemo(() => {
    if (farmedAmount !== undefined) {
      return (
        <>
          {mojoToAppleLocaleString(farmedAmount)}
          &nbsp;
          {currencyCode}
        </>
      );
    }
  }, [farmedAmount]);

  return (
    <CardSimple
      title={<Trans>Total Apple Farmed</Trans>}
      value={totalAppleFarmed}
      loading={isLoading}
      error={error}
    />
  );
}
