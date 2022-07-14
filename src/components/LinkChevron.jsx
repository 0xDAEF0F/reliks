import Link from 'next/link'
import { IoChevronForward } from 'react-icons/io5'

export default function LinkChevron({ title, to, xClass }) {
  return (
    <Link href={to}>
      <a
        className={`cursor-pointer hover:bg-light-violet5 dark:hover:bg-darkMode-violet5 opacity-60 text-black dark:text-white hover:opacity-100 pl-1 py-3 rounded-md text-base font-semibold flex items-center ${xClass}`}>
        {title}
      </a>
    </Link>
  )
}
