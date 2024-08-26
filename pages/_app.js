import '../styles/globals.css'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      forcedTheme={Component.theme || null}
      enableSystem={true}>
      <TooltipProvider>
        <Component {...pageProps} />
      </TooltipProvider>
    </NextThemesProvider>
  )
}

export default MyApp
