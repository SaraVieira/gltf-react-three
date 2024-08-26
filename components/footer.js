import { useTheme } from 'next-themes'
import { GitHub, Logo } from './icons'
import ThemeSwitch from './ThemeToggle'
import ThemeSwitcher from './ThemeToggle'
const Footer = () => {
  const { theme } = useTheme()
  return (
    <footer className="p-4 flex items-center justify-between w-full z-10 relative">
      <a href="https://pmnd.rs/" target="_blank" rel="noreferrer">
        <Logo color={theme === 'light' ? 'black' : 'white'} />
      </a>
      <p className="text-xs">
        Made by{' '}
        <a
          className="underline hover:text-blue-600"
          href="https://twitter.com/NikkitaFTW"
          target="_blank"
          rel="noreferrer">
          @NikkitaFTW
        </a>{' '}
        &{' '}
        <a
          className="underline hover:text-blue-600"
          href="https://github.com/pmndrs/gltf-react-three/graphs/contributors">
          contributors
        </a>{' '}
        inspired by the{' '}
        <a className="underline hover:text-blue-600" href="https://github.com/pmndrs/gltfjsx">
          gltfjsx cli
        </a>
      </p>
      <div className='flex gap-8'>
        <a href="https://github.com/pmndrs/gltf-react-three/" target="_blank" rel="noreferrer">
          <GitHub color={theme === 'light' ? 'black' : 'white'} />
        </a>
        <div className='flex'>
        <p>Theme:</p>
        <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}

export default Footer
