import Link from 'next/link'
import EmptyTable from './EmptyTable'
import { TbArrowUpRight } from 'react-icons/tb'

const people = [
  {
    address: '0xtkjn7we908r7w9e087r',
    date: 'July 2022',
    price: '5',
  },
  {
    address: '0xj777g7sdbsjkndkjsnhbhjb',
    date: 'August 2022',
    price: '5',
  },
  {
    address: '0xkjnkjn5kn5kjn5i5n5ksl',
    date: 'August 2022',
    price: '5',
  },
  {
    address: '0xkjnkjn4w908r7w9e087r',
    date: 'July 2022',
    price: '5',
  },
  {
    address: '0xjnj97sdbsjkndkjsnhbhjb',
    date: 'August 2022',
    price: '5',
  },
]

export default function LairTable() {
  return (
    <div className='flex flex-col space-y-2'>
      <div>
        <h2 className='ml-10 text-base font-medium uppercase tracking-wide text-light-violet11 dark:text-darkMode-violet11'>
          Lair Table
        </h2>
        <div className='flex justify-between'>
          <p className='ml-5 px-1 py-2 text-sm italic text-light-gray opacity-75 dark:text-darkMode-gray'>
            Current lair price: 5 ETH
          </p>
          <p className='mr-5 px-1 py-2 text-sm italic text-light-gray opacity-75 dark:text-darkMode-gray'>
            Capacity: 5/20
          </p>
        </div>
      </div>
      <div className=' overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full align-middle sm:px-6 lg:px-8'>
          <div className='overflow-hidden rounded-b-lg'>
            {people.length > 0 ? (
              <table
                style={{ 'border-spacing': '0px 0.2rem' }}
                className='border- min-w-full'>
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
                  {people.map((person) => (
                    <tr
                      className=' odd:bg-light-violet3 even:bg-light-violet2 odd:dark:bg-darkMode-violet3 even:dark:bg-darkMode-violet2'
                      key={person.address}>
                      <td className='whitespace-nowrap px-6 py-4 text-sm font-medium text-light-gray opacity-75 dark:text-darkMode-gray'>
                        <div className='flex'>
                          <div className='group flex cursor-pointer opacity-80 hover:text-light-violet11 dark:hover:text-darkMode-violet11'>
                            <Link href={`https://etherscan.io/address/${person.address}`}>
                              <a className='flex' target='_blank'>
                                {person.address}
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
                        {person.price} ETH
                      </td>
                      <td className='whitespace-nowrap px-6 py-4 text-sm text-light-gray opacity-75 dark:text-darkMode-gray'>
                        {person.date}
                      </td>
                    </tr>
                  ))}
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
