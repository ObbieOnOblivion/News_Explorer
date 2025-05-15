// app/template.tsx
'use client';

import Header from '../components/header';
import Footer from '../components/footer';

export default function Template({ children }: { children: React.ReactNode }) {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { 
      label: 'Services', 
      href: '/services',
      subItems: [
        { label: 'Web Development', href: '/services/web' },
        { label: 'Mobile Apps', href: '/services/mobile' },
      ]
    },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div>
      <Header
        logo={<span className="text-2xl font-bold">MyApp</span>}
        navItems={navItems}
        cta={{ label: 'Get Started', href: '/signup' }}
        showDarkModeToggle={true}
      />
      <main className="pt-16"> {/* Add padding to account for fixed header */}
        {children}
      </main>
      <Footer />
    </div>
  );
}