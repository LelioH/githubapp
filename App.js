import React from 'react';
import Routes from './src/routes';
import {PersistGate} from 'redux-persist/integration/react';

export default function App() {
  return (
    <PersistGate>
      <Routes />
    </PersistGate>
  );
}
