import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Route from './route/Route.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Route />
    <ToastContainer position="top-right"
            autoClose={4000} 
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored" />
  </StrictMode>,
)
