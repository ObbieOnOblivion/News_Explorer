// src/layouts/MainLayout.tsx
import { Outlet, Link } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-gray-800 text-white px-6 py-4 shadow">
        <nav className="flex gap-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        </nav>
      </header>

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
