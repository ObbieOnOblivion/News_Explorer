// src/layouts/MainLayout.tsx
import { Outlet, Link } from 'react-router-dom';
import Header from '../components/header/Header'

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Header />

      {/* Main content */}
      <main className="flex-1 px-6 py-4">
        <Outlet /> {/* This renders the current page */}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </footer>
    </div>
  );
}
