import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";

import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";

import { AppRoutes } from "./app/routes/AppRoutes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
