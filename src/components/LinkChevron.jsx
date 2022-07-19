import Link from 'next/link'
import { MdOutlineExplore, MdAccountCircle, MdLogout } from 'react-icons/md'
import { IoMdMoon } from 'react-icons/io'

const icons = {
  Explore: <MdOutlineExplore size={26} />,
  Profile: <MdAccountCircle size={26} />,
}

export default function LinkChevron({ title, to, xClass }) {
  return (
    <Link href={to}>
      <a
        className={`flex cursor-pointer items-center gap-2 rounded-md py-3 pl-1 text-base font-semibold text-black opacity-60 hover:bg-light-violet5 hover:opacity-100 dark:text-white dark:hover:bg-darkMode-violet5 ${xClass}`}>
        {icons[title]}
        {title}
      </a>
    </Link>
  )
}
