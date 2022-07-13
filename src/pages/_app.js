import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl='https://rsrqtfhqsfhm.usemoralis.com:2053/server'
      appId='VoMFmmbGFfVC3GEOPQxOZvJctC6VYMDwyIu44ba0'>
      <ThemeProvider
        forcedTheme={Component.theme || undefined}
        attribute='class'>
        <Toaster />
        <Component {...pageProps} />
      </ThemeProvider>
    </MoralisProvider>
  )
}

export default MyApp
