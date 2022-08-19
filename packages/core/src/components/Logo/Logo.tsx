import React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '@mui/material';
import { Apple } from '@apple/icons';

const StyledApple = styled(Apple)`
  max-width: 100%;
  width: auto;
  height: auto;
`;

export default function Logo(props: BoxProps) {
  return (
    <Box {...props}>
      <StyledApple />
    </Box>
  );
}
