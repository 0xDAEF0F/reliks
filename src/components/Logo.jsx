import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

function Logo() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  // Only render UI that uses the current theme when the page is mounted on the client
  // Avoid hydration mismatch error
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const ThemeLogo = () => {
    switch (resolvedTheme) {
      case 'light':
        return '/logolm.svg'
      case 'dark':
        return '/logodm.svg'
      default:
        return '/logodm.svg'
    }
  }

  return (
    <Link href='/'>
      <a className='relative flex items-center'>
        <Image layout='fixed' alt='Logo' height={30} width={120} src={ThemeLogo()} />
      </a>
    </Link>
  )
}

export default Logo
