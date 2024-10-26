import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './pages/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    
  },
  {
    path: "/test",
    element: <div>test</div>,
  },
  {
    path: "/hello",
    element: <div>Hello world!</div>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
