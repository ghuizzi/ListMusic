import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';

export function RouterView() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
