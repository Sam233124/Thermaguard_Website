import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-slate-800 text-white p-4">
      <nav className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <Link href="/" className="flex items-center space-x-2 hover:text-gray-300 transition">
            <Image
              src="/images/thermaguard-logo.png"
              alt="ThermaGuard - Beste oplossing koude voeten skiën"
              width={60}
              height={60}
              className="w-auto h-auto"
            />
            <span className="text-xl md:text-2xl font-bold">ThermaGuard</span>
          </Link>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/about" className="hover:text-gray-300">Over ons</Link>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
            <input
              type="text"
              placeholder="Zoeken..."
              className="px-2 py-1 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary w-full md:w-auto"
            />
            <Link 
              href="https://shop.thermaguard.nl" 
              className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition w-full md:w-auto text-center"
            >
              Bestel Nu!
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 