import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './components/Login.jsx';
import { createBrowserRouter,RouterProvider,Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Register from './components/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
    
    
  },
  {
    path: "/register",
    element: <Register />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
