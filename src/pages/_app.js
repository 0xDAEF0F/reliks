import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
      appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}>
      <ThemeProvider forcedTheme={Component.theme || undefined} attribute='class'>
        <Toaster />
        <Component {...pageProps} />
      </ThemeProvider>
    </MoralisProvider>
  )
}

export default MyApp
