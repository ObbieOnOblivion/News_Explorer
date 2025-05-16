import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css';

// Layout Components
import MainLayout from './layouts/MainLayout.jsx';
// import AuthLayout from './layouts/AuthLayout';

// Page Components
import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import DashboardPage from './pages/DashboardPage';
// import LoginPage from './pages/LoginPage';
// import NotFoundPage from './pages/NotFoundPage';
import ComingSoonPage from './pages/CommingSoonPage.jsx'

// please keep your git flow clean :)

const router = createBrowserRouter([
  {
    element: <MainLayout />, // Shared navbar/footer
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <ComingSoonPage /> },
      { path: '/dashboard', element: <ComingSoonPage /> }
    ]
  },
  // {
  //   element: <AuthLayout />, // Different layout (no navbar)
  //   children: [
  //     { path: '/login', element: <ComingSoonPage /> },
  //     { path: '/register', element: <ComingSoonPage /> }
  //   ]
  // },
  {
    path: '*',
    element: <ComingSoonPage /> // 404 catch-all
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);