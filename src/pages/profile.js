import React, { useEffect } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Profile from '../components/Profile'
import { useMoralis } from 'react-moralis'
import { useRouter } from 'next/router'

function ProfilePage() {
  const { isInitialized, isAuthenticated } = useMoralis()
  const router = useRouter()

  useEffect(() => {
    const isAuth = () => (!isAuthenticated ? router.push('/') : null)
    isInitialized && isAuth()
  }, [isInitialized, isAuthenticated])

  return (
    <>
      <Header />
      <Banner />
      <Profile />
    </>
  )
}

export default ProfilePage
