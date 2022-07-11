import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Settings from '../../components/Settings'
import { useMoralis } from 'react-moralis'
import { useRouter } from 'next/router'

function SettingsPage() {
  const { isAuthenticated } = useMoralis()
  const router = useRouter()

  useEffect(() => {
    !isAuthenticated ? router.push('/') : ''
  }, [])

  return (
    <>
      <Header />
      <Banner />
      <Settings />
    </>
  )
}

export default SettingsPage
