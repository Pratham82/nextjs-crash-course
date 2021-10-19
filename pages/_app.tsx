import '../styles/globals.css'
import type { AppProps } from 'next/app'
import * as React from 'react';
import { useState } from 'react';

import HelloWorld from './hello_world'

function MyApp({ Component, pageProps }: AppProps) {
  // This will be executed on server and client as well everyTime
  // console.log('From _app.tsx');
  return (
    <Component {...pageProps} />
  )
}
export default MyApp
