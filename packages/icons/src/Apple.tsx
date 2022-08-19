import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import AppleIcon from './images/apple.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={AppleIcon} viewBox="-4 -8 68 68" {...props} />;
}
