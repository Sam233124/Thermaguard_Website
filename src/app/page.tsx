'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-slate-800 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 hover:text-gray-300 transition">
            <Image
              src="/images/thermaguard-logo.png"
              alt="Thermaguard Logo"
              width={80}
              height={80}
              className="w-auto h-auto"
            />
            <span className="text-2xl font-bold">Thermaguard</span>
          </Link>
          <div className="flex items-center space-x-8">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
            <input
              type="text"
              placeholder="Zoeken..."
              className="px-2 py-1 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Link 
              href="https://uw-shopify-url.com" 
              className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition"
            >
              Bestel Nu!
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/ski-background.jpg"
            alt="Ski achtergrond"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="relative z-20 container mx-auto h-full flex items-center px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Optimale warmte, duurzame bescherming
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Ervaar het ultieme comfort met onze geavanceerde thermische technologie voor skischoenen. 
              Wij zorgen voor warme voeten en optimale prestaties op de piste.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://uw-shopify-url.com" 
                className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition"
              >
                Bestel Nu!
              </Link>
              <Link 
                href="/contact" 
                className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
              >
                Neem contact op
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Waarom Thermaguard?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-primary text-4xl mb-4">
                <i className="fas fa-temperature-high"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Optimale Temperatuur</h3>
              <p className="text-gray-600">
                Onze innovatieve technologie zorgt voor een constante en aangename temperatuur in uw skischoenen.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-primary text-4xl mb-4">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Duurzame Bescherming</h3>
              <p className="text-gray-600">
                Hoogwaardige materialen en vakmanschap garanderen langdurige bescherming en comfort.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-primary text-4xl mb-4">
                <i className="fas fa-skiing"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Maximale Prestatie</h3>
              <p className="text-gray-600">
                Verbeter uw ski-ervaring met perfect passende en verwarmde skischoenen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/images/thermaguard-logo.png"
                alt="Thermaguard Logo"
                width={60}
                height={60}
                className="mb-4 w-auto h-auto"
              />
              <p className="text-gray-300">
                Optimale warmte, duurzame bescherming voor uw skischoenen.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <p className="text-gray-300">
                Email: info@thermaguard.nl<br />
                Tel: +31 (0)6 12345678
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Menu</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Volg ons</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/share/181jtPBi6h/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="https://www.instagram.com/thermaguard.nl?igsh=MXE0cnZ5djlrMGg3OQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
} 