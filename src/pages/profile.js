import React, { useEffect } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Profile from '../components/Profile'
import { useMoralis } from 'react-moralis'
import { useRouter } from 'next/router'

function ProfilePage() {
  const { isAuthenticated } = useMoralis()
  const router = useRouter()

  useEffect(() => {
    !isAuthenticated ? router.push('/') : ''
  }, [])

  return (
    <>
      <Header />
      <Banner />
      <Profile />
    </>
  )
}

export default ProfilePage
