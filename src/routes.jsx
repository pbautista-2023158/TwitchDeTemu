import { element } from "prop-types";
import { AuthPage } from "./pages/Auth/AuthPage";
import { DashboardPage } from "./pages/Dashboard/DashboardPage";
import { NotFound } from "./pages/NotFound/NotFoundPage";

export const routes = [
    {
        path: '/', 
        element: <AuthPage />
    },    
    {
        path: '/auth', 
        element: <AuthPage />
    },
    {
        path: '/dashboard', 
        element: <DashboardPage />
    },    
    {
        path: '*', 
        element: <NotFound />
    },
]