import { useTheme } from 'next-themes'
import { GitHub, Logo } from './icons'
import ThemeSwitch from './ThemeToggle'
const Footer = () => {
  const { theme } = useTheme()
  return (
    <footer className="p-4 flex items-center justify-between w-full z-10 relative"> {/* Added background color */}
      <a href="https://pmnd.rs/" target="_blank" rel="noreferrer">
        <Logo color={theme === 'dark' ? 'white' : 'black'} />
      </a>
      <p className="text-xs text-center"> {/* Centered text for better layout */}
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
      <div className='flex items-center gap-4'> {/* Adjusted gap and alignment */}
        <div className='flex items-center'> {/* Centered items in the flex container */}
          <ThemeSwitch />
        </div>
        <a href="https://github.com/pmndrs/gltf-react-three/" target="_blank" rel="noreferrer">
          <GitHub color={theme === 'dark' ? 'white' : 'black'} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
