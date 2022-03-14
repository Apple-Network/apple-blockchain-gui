import React from 'react';
import { ModeProvider } from '@apple/core';
import AppRouter from './AppRouter';

export default function App() {
  return (
    <ModeProvider persist>
      <AppRouter />
    </ModeProvider>
  );
}
