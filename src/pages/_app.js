import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { Toaster } from 'react-hot-toast'
import Footer from '../components/Footer'

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL
const appId = process.env.NEXT_PUBLIC_MORALIS_APP_ID

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider serverUrl={serverUrl} appId={appId}>
      <ThemeProvider forcedTheme={Component.theme || undefined} attribute='class'>
        <Toaster />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </MoralisProvider>
  )
}

export default MyApp
