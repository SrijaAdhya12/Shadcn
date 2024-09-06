import { ThemeProvider } from "@/components/theme-provider"
import { Home } from './pages'
import { Toaster } from '@/components/ui/toaster'

const App = () => {
  return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<Home />
			<Toaster />
		</ThemeProvider>
  )
  
}

export default App
