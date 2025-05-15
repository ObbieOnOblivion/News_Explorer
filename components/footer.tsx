



// //study types 
// type ButtonProps = {
//     text: string;
//     onClick: () => void;
//     variant?: 'primary' | 'secondary'; // Literal type
//     disabled?: boolean;
//   };





import Link from 'next/link';
import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
                        © {currentYear} Supersite, Powered by News API
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 text-sm font-medium">
                            Home
                        </Link>
                        <Link href="https://www.tripleten.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 text-sm font-medium">
                            TripleTen
                        </Link>
                        <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 text-sm font-medium">
                            GitHub
                        </Link>
                        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 text-sm font-medium">
                            Facebook
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;