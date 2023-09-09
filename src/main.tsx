import { createRoot } from 'react-dom/client';

import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
