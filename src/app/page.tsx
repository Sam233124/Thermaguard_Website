'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-slate-800 text-white p-4">
        <nav className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <Link href="/" className="flex items-center space-x-2 hover:text-gray-300 transition">
              <Image
                src="/images/thermaguard-logo.png"
                alt="Thermaguard - Beste oplossing koude voeten skiën"
                width={60}
                height={60}
                className="w-auto h-auto"
              />
              <span className="text-xl md:text-2xl font-bold">Thermaguard</span>
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

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/ski-background.jpg"
            alt="Skischoen warmhouden met Thermaguard - Voordelen van skischoen warmer voor wintersport"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className="relative z-20 container mx-auto h-full flex items-center px-4">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Optimale warmte, duurzame bescherming
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6 md:mb-8">
              Ervaar het ultieme comfort met onze geavanceerde thermische technologie voor skischoenen. 
              Wij bieden de beste overschoen voor skiën in extreme kou en waterdichte overschoenen voor skischoenen.
            </p>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <Link 
                href="https://shop.thermaguard.nl" 
                className="bg-primary text-white px-6 py-3 rounded-lg text-base md:text-lg font-semibold hover:bg-opacity-90 transition text-center"
              >
                Bestel Nu!
              </Link>
              <Link 
                href="/contact" 
                className="bg-white text-primary px-6 py-3 rounded-lg text-base md:text-lg font-semibold hover:bg-gray-100 transition text-center"
              >
                Neem contact op
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Waarom Thermaguard?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <div className="text-primary text-3xl md:text-4xl mb-4">
                <i className="fas fa-temperature-high"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Optimale Temperatuur</h3>
              <p className="text-gray-600">
                Onze warmte-isolerende hoes voor skischoenen zorgt voor een constante en aangename temperatuur, 
                de beste oplossing voor koude voeten tijdens skiën.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <div className="text-primary text-3xl md:text-4xl mb-4">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Duurzame Bescherming</h3>
              <p className="text-gray-600">
                Onze thermische overschoen voor skiboots biedt hoogwaardige bescherming skischoen 
                en garandeert langdurige bescherming en comfort.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <div className="text-primary text-3xl md:text-4xl mb-4">
                <i className="fas fa-skiing"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Maximale Prestatie</h3>
              <p className="text-gray-600">
                Met onze isolatie hoes voor skischoenen verbeter je je ski-ervaring en voorkom je 
                koude tenen skischoenen oplossen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <Image
                src="/images/thermaguard-logo.png"
                alt="Thermaguard - Extra warme skischoen hoes voor kinderen en volwassenen"
                width={60}
                height={60}
                className="mb-4 mx-auto md:mx-0 w-auto h-auto"
              />
              <h3 className="text-xl font-bold mb-2">Optimale warmte, duurzame bescherming</h3>
              <p className="text-gray-300">
                Voor uw skischoenen. Tips voor warme voeten tijdens skiën en koude voeten wintersport oplossen.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <p className="text-gray-300">
                Email: info@thermaguard.nl<br />
                Tel: +31 (0)6 12345678
              </p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold mb-4">Menu</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold mb-4">Volg ons</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="https://www.facebook.com/share/181jtPBi6h/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="https://www.instagram.com/thermaguard.nl?igsh=MXE0cnZ5djlrMGg3OQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="https://www.linkedin.com/company/thermaguard/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
} 