import { RouterProvider } from "react-router-dom";
import useRouterApp from "./routers";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={useRouterApp()} />
    </QueryClientProvider>
  );
}

export default App;
