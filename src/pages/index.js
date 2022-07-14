import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Abstract from '../components/Abstract'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import { useMoralis } from 'react-moralis'

export default function Home() {
  const { query } = useRouter()
  const { refetchUserData } = useMoralis()

  // tracks for changes in tokens query param
  useEffect(() => {
    if (query.creatorFlow === 'fail') {
      toast.error('fail creator process please try again')
    }
    if (query.creatorFlow === 'success') {
      toast.success('succesfully creator validation')
      // need to pull user data from db again
      refetchUserData()
    }
  }, [query.creatorFlow])

  return (
    <>
      <Header />
      <Banner />
      <Abstract />
    </>
  )
}
