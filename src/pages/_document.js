import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name='google' content='nositelinkssearchbox' key='sitelinks' />
          <meta name='google' content='notranslate' key='notranslate' />
        </Head>
        <body className='bg-light-violet1 text-mauve dark:bg-darkMode-violet1 dark:text-darkMode-violet12'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
