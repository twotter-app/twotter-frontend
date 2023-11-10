import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/router';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './lib/react-query';
import { ThemeProvider } from '@/theme/ThemeProvider';
import TimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en.json';
import { Toaster } from './components/ui/toaster';
import { Provider } from 'react-redux';
import { store } from './stores/store';

TimeAgo.addDefaultLocale(en);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Router />
            <Toaster />
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
