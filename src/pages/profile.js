import React, { useEffect } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Profile from '../components/Profile'
import { useMoralis } from 'react-moralis'
import { useRouter } from 'next/router'

function ProfilePage() {
  const { isInitialized, isAuthenticated, user } = useMoralis()
  const router = useRouter()

  function isCreator() {
    const verifiedSocialPlatforms = user.get('verifiedSocialPlatforms')
    if (verifiedSocialPlatforms.length > 0) return true
    return false
  }

  useEffect(() => {
    isInitialized && isAuthenticated && isCreator() ? null : router.push('/')
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
