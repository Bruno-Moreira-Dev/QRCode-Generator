import { ThemeProvider } from 'styled-components'
import { QrCode } from './components/QrCode'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <QrCode />
    </ThemeProvider>
  )
}
