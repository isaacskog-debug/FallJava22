import React from 'react';
import ReactDOM from 'react-dom/client';

import Email from './email/Email07'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Email />
    <Email success-message="Good work!" background="burlywood"  border-thickness={20} />

    <Email success-message="xxxxxxxxxxxx" background="yellow"  border-thickness={40} />

  </React.StrictMode>
);

