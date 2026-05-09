'use client';

import React from 'react';
import Link from 'next/link';
import { Home, Wallet, PieChart, Users, Store, User } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/dashboard', icon: Home, label: 'Home' },
    { href: '/transactions', icon: Wallet, label: 'Finances' },
    { href: '/budget-agent', icon: PieChart, label: 'Allowee' },
    { href: '/community', icon: Users, label: 'Feed' },
    { href: '/marketplace', icon: Store, label: 'School' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 flex justify-between items-center md:top-0 md:bottom-auto md:flex-col md:w-64 md:h-full md:border-r md:border-t-0">
      <div className="hidden md:block mb-8 mt-4">
        <h1 className="text-2xl font-bold gradient-text italic">Allowee</h1>
      </div>
      <div className="flex w-full justify-between md:flex-col md:gap-4">
        {navItems.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center p-2 rounded-lg md:flex-row md:gap-3 md:px-4 ${
              pathname === href ? 'text-purple-600 bg-purple-50' : 'text-gray-500'
            }`}
          >
            <Icon size={24} />
            <span className="text-xs md:text-base">{label}</span>
          </Link>
        ))}
      </div>
      <div className="hidden md:mt-auto md:block w-full p-4 border-t border-gray-100">
         <Link href="/profile" className="flex items-center gap-3 text-gray-500">
            <User size={24} />
            <span>Profile</span>
         </Link>
      </div>
    </nav>
  );
};

export default Navbar;
