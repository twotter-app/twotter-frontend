import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/router';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './lib/react-query';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
