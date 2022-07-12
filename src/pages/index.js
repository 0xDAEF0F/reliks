import { Toaster } from 'react-hot-toast'
import Banner from '../components/Banner'
import Header from '../components/Header'
import NextPlaceHolder from '../components/NextPlaceHolder'

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <NextPlaceHolder />
      <Toaster />
    </>
  )
}
