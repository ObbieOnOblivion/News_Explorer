'use client'; // Mark this as a Client Component

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

interface HeaderProps {
  logo: React.ReactNode;
  navItems: NavItem[];
  cta?: {
    label: string;
    href: string;
  };
  showDarkModeToggle?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  logo,
  navItems,
  cta,
  showDarkModeToggle = false,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-white dark:bg-gray-900'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" passHref>
              <div className="flex items-center cursor-pointer">
                {logo}
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link href={item.href}>
                  <span
                    className={`py-2 px-1 font-medium transition-colors ${
                      pathname === item.href
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
                {item.subItems && (
                  <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link key={subIndex} href={subItem.href}>
                        <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 cursor-pointer">
                          {subItem.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA & Dark Mode Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {showDarkModeToggle && (
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <span className="text-yellow-400">☀️</span>
                ) : (
                  <span className="text-gray-600">🌙</span>
                )}
              </button>
            )}
            {cta && (
              <Link href={cta.href}>
                <span className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
                  {cta.label}
                </span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            {showDarkModeToggle && (
              <button
                onClick={toggleDarkMode}
                className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <span className="text-yellow-400">☀️</span>
                ) : (
                  <span className="text-gray-600">🌙</span>
                )}
              </button>
            )}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none dark:text-gray-300 dark:hover:text-primary-400"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <React.Fragment key={index}>
                  <Link href={item.href}>
                    <span
                      onClick={closeMenu}
                      className={`block px-3 py-2 rounded-md font-medium ${
                        pathname === item.href
                          ? 'bg-primary-50 text-primary-600 dark:bg-gray-700 dark:text-primary-400'
                          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                  {item.subItems && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.subItems.map((subItem, subIndex) => (
                        <Link key={subIndex} href={subItem.href}>
                          <span
                            onClick={closeMenu}
                            className="block px-3 py-2 rounded-md font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                          >
                            {subItem.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </React.Fragment>
              ))}
              {cta && (
                <Link href={cta.href}>
                  <span
                    onClick={closeMenu}
                    className="block mt-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-center font-medium transition-colors"
                  >
                    {cta.label}
                  </span>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;