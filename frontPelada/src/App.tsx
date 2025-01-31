import { GlobalStyle } from './styles/global.ts';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme/default';
import { BrowserRouter} from 'react-router';

import { Router } from './Router.tsx';
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
