import React, { useEffect } from 'react'
import { useMoralis } from 'react-moralis'

function Moralis() {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis()

  useEffect(() => {
    console.log('user auth:', isAuthenticated)
    if (isAuthenticated) {
      // add your logic here
    }
  }, [isAuthenticated])

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: 'Log in using Moralis' })
        .then(function (user) {
          console.log('logged in user:', user)
          console.log(user.get('ethAddress'))
        })
        .catch(function (error) {
          console.log(error)
        })
    }
    console.log(user, account)
  }

  const logOut = async () => {
    await logout()
    console.log('logged out')
  }

  return (
    <div>
      <h1 className='text-xl text-red-300'>Moralis Hello World!</h1>
      <button className='border-2 mt-3' onClick={login}>
        Moralis Metamask Login
      </button>
      <button
        className='border-2 block mt-3'
        onClick={logOut}
        disabled={isAuthenticating}>
        Logout
      </button>
    </div>
  )
}

export default Moralis
