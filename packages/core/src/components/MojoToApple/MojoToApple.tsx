import BigNumber from 'bignumber.js';
import React from 'react';

import useCurrencyCode from '../../hooks/useCurrencyCode';
import mojoToApple from '../../utils/mojoToAppleLocaleString';
import FormatLargeNumber from '../FormatLargeNumber';

export type MojoToAppleProps = {
  value: number | BigNumber;
};

export default function MojoToApple(props: MojoToAppleProps) {
  const { value } = props;
  const currencyCode = useCurrencyCode();
  const updatedValue = mojoToApple(value);

  return (
    <>
      <FormatLargeNumber value={updatedValue} />
      &nbsp;{currencyCode ?? ''}
    </>
  );
}
