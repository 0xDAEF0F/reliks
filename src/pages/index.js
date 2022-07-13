import { Toaster } from 'react-hot-toast'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Abstract from '../components/Abstract'

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Abstract />
      <Toaster />
    </>
  )
}
