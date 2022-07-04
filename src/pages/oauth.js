import React from 'react'
import Axios from 'axios'

function Oauth() {
  function callApi() {
    Axios.get('/api/loginyt').then((res) => (window.location = res.data))
  }
  return (
    <div>
      <h1 className='text-xl text-red-500'>Youtube Hello World!</h1>
      <button onClick={callApi} className='border-2 mt-3'>
        Login with youtube
      </button>
      <button className='border-2 block mt-3'>Logout</button>
    </div>
  )
}

export default Oauth
