import React, { useEffect } from 'react'
import SignUpAsCreatorBanner from '../components/SignUpAsCreatorBanner'
import Header from '../components/Header'
import { AppAbstract } from '../components/AppAbstract'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import { useMoralis } from 'react-moralis'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function Home() {
  const { query } = useRouter()
  const { refetchUserData, web3, enableWeb3 } = useMoralis()

  // tracks for changes in tokens query param
  useEffect(() => {
    if (query.creatorFlow === 'fail') {
      toast.error('fail creator process please try again')
    }
    if (query.creatorFlow === 'nochannel') {
      toast.error('Please create a Youtube channel.')
    }
    if (query.creatorFlow === 'success') {
      toast.success('Creator validation completed.')
      // need to pull user data from db again
      refetchUserData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.creatorFlow])

  useEffect(() => {
    if (!web3) enableWeb3()
  }, [web3, enableWeb3])

  return (
    <>
      <Head>
        <title>Home | Reliks</title>
        <meta
          name='description'
          content='Reliks is a platform for content creators to connect with their fan base, get supported, and in return, grant rewards in the form of NFTs, fungible tokens, and physical items.'
        />
        <meta property='og:title' content='Reliks' />
        <meta
          property='og:description'
          content='Join your favorite content creators ecosystem.'
        />
        {/* TODO: Pending image (image that appears when sharing the link across social platforms) */}
        {/* <meta property='og:image' content=''/> */}
      </Head>
      <Header />
      <SignUpAsCreatorBanner xclass='invisible hidden md:block' />
      <AppAbstract />
      <Footer />
    </>
  )
}
