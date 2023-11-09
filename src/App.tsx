import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/router";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./lib/react-query";
import { ThemeProvider } from "@/theme/theme-provide.tsx";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
