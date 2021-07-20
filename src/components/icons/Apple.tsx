import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as AppleIcon } from './images/apple.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={AppleIcon} viewBox="-4 -8 68 68" {...props} />;
}
