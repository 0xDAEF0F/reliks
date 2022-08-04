import Link from 'next/link'
import EmptyTable from './EmptyTable'
import { TbArrowUpRight } from 'react-icons/tb'
import { useMoralisQuery } from 'react-moralis'

export default function LairTable({ lairInfo }) {
  const { data: whalesArr } = useMoralisQuery(
    'Whale',
    (query) => query.equalTo('lairAddress', lairInfo.lairAddress),
    [],
    { autoFetch: true }
  )

  return (
    <div className='mt-4 flex flex-col space-y-2'>
      <div>
        <h2 className='ml-8 text-base font-medium uppercase tracking-wide text-light-violet11 dark:text-darkMode-violet11'>
          Lair Status
        </h2>
        <div className='flex justify-between'>
          <p className='ml-5 px-1 py-2 text-sm italic text-light-gray opacity-75 dark:text-darkMode-gray'>
            Lair Entry Price: {lairInfo.initialLairEntry} ETH
          </p>
          <p className='mr-5 px-1 py-2 text-sm italic text-light-gray opacity-75 dark:text-darkMode-gray'>
            Capacity: {lairInfo.whaleCount} whales
          </p>
        </div>
      </div>
      <div className=' overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full align-middle sm:px-6 lg:px-8'>
          <div className='overflow-hidden rounded-b-lg'>
            {whalesArr.length > 0 ? (
              <table style={{ borderSpacing: '0px 0.2rem' }} className='min-w-full'>
                <thead className='border-y border-light-bordergray dark:border-darkMode-violet7'>
                  <tr>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider dark:text-darkMode-violet12'>
                      Eth Address
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider dark:text-darkMode-violet12'>
                      Entry Price
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider dark:text-darkMode-violet12'>
                      Joined Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {whalesArr.map((whale, i) => {
                    const whaleAddr = whale.get('whale')
                    const entryPrice = whale.get('amount')
                    const entryDate = whale.get('createdAt')
                    return (
                      <tr
                        className='odd:bg-light-violet3 even:bg-light-violet2 odd:dark:bg-darkMode-violet3 even:dark:bg-darkMode-violet2'
                        key={i}>
                        <td className='whitespace-nowrap px-6 py-4 text-sm font-medium text-light-gray opacity-75 dark:text-darkMode-gray'>
                          <div className='flex'>
                            <div className='group flex cursor-pointer opacity-80 hover:text-light-violet11 dark:hover:text-darkMode-violet11'>
                              <Link href={`https://etherscan.io/address/${whaleAddr}`}>
                                <a className='flex' target='_blank'>
                                  {whaleAddr}
                                  <TbArrowUpRight
                                    className='invisible group-hover:visible'
                                    size={17}
                                  />
                                </a>
                              </Link>
                            </div>
                          </div>
                        </td>
                        <td className='whitespace-nowrap px-6 py-4 text-sm text-light-gray opacity-75 dark:text-darkMode-gray'>
                          {entryPrice} ETH
                        </td>
                        <td className='whitespace-nowrap px-6 py-4 text-sm text-light-gray opacity-75 dark:text-darkMode-gray'>
                          {new Date(entryDate).toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'long',
                          })}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            ) : (
              <EmptyTable />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
