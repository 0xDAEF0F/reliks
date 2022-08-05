import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'

function Logo() {
  const { theme } = useTheme()
  const ThemeLogo = () =>
    theme === 'light' ? (
      <Image layout='fixed' alt='Logo' height={22} width={120} src='/logolm.svg' />
    ) : (
      <Image layout='fixed' alt='Logo' height={22} width={120} src='/logodm.svg' />
    )
  return (
    <Link href='/'>
      <a className='relative flex items-center'>
        <ThemeLogo />
      </a>
    </Link>
  )
}

export default Logo
