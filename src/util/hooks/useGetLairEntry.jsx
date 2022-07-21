import { useEffect, useState } from 'react'
import Moralis from 'moralis'
import { abi } from '../deployWhale'
import { useMoralis } from 'react-moralis'
const ethers = Moralis.web3Library

export function useGetLairEntry(contractAddr) {
  const [lairEntry, setLairEntry] = useState(null)
  const { web3 } = useMoralis()

  useEffect(() => {
    if (!web3) return

    console.log('Running...')
    const lairContract = new ethers.Contract(contractAddr, abi, web3)
    // subscribe to the event
    lairContract.on('LogNewWhale', (amount, newWhaleAddr) => {
      console.log('amount: ', amount.toString())
      console.log('new address: ', newWhaleAddr)
      if (newWhaleAddr === contractAddr) setLairEntry(amount)
    })

    return () => {
      console.log('Unmounting...')
      // unsusbscribe
      lairContract.off('LogNewWhale')
    }
  }, [web3, contractAddr])

  return {
    lairEntry,
  }
}
