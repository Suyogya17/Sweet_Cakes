import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Registration from './Pages/UserPages/Registration.tsx';
import Login from './Pages/UserPages/Login.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: "/",
        element: <Registration />,
    },
    {
        path: "/sign-in",
        element: <Login />,
    },
]);

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ToastContainer position="top-right" />
            <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
    );
}

export default App
