import React from 'react';
import Layout from './src/components/layout.js';

import './node_modules/bootstrap/dist/css/bootstrap.css';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
