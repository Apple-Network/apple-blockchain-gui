import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

import AppleBlackIcon from './images/apple-black.svg';
import AppleIcon from './images/apple.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={AppleIcon} viewBox="0 0 150 58" {...props} />;
}

export function AppleBlack(props: SvgIconProps) {
  return <SvgIcon component={AppleBlackIcon} viewBox="0 0 100 39" sx={{ width: '100px', height: '39px' }} {...props} />;
}
