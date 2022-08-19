import React from 'react';
import { Trans } from '@lingui/macro';
import { FormatBytes, CardSimple } from '@apple/core';
import { useGetTotalHarvestersSummaryQuery } from '@apple/api-react';

export default function FarmCardTotalSizeOfPlots() {
  const { totalPlotSize, isLoading } = useGetTotalHarvestersSummaryQuery();

  return (
    <CardSimple
      title={<Trans>Total Size of Plots</Trans>}
      value={<FormatBytes value={totalPlotSize} precision={3} />}
      loading={isLoading}
    />
  );
}
