import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./sections/Login.tsx";

// without HOC
// import { Login } from "./sections/Login.tsx"; 
import ProtectedRoute from "./components/ProtectedRoute.tsx"; 
import { AuthProvider } from "./context/AuthProvider.tsx";
// import { FinanceProvider } from "./context/FinanceProvider.tsx";

// redux 
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <Login/>
    ),
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {/* <FinanceProvider> */}
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
        {/* </FinanceProvider> */}
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
);
