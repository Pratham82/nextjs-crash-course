import '../styles/globals.css'
import type { AppProps } from 'next/app'
import * as React from 'react';
import { useState } from 'react';

import HelloWorld from './hello_world'

function MyApp({ Component, pageProps }: AppProps) {
return (
  <Component {...pageProps} />
)
}
export default MyApp
