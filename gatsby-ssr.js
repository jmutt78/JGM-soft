import React from 'react';
import './node_modules/bootstrap/dist/css/bootstrap.css';
import Layout from '.src/components/layout.js';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
