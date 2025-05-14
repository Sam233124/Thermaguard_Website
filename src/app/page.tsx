'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/ski-background.jpg"
            alt="Skischoen warmhouden met ThermaGuard - Voordelen van skischoen warmer voor wintersport"
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Waarom ThermaGuard?</h2>
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
                en zorgt voor langdurige bescherming en comfort.
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

      {/* Waarom onze overschoen Section */}
      <section className="py-12 bg-primary/10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Waarom onze overschoen?</h2>
            <p className="text-gray-700 mb-6 max-w-xl">
              Onze overschoenen zijn verkrijgbaar in verschillende kleuren en met unieke prints zoals panterprint. Dankzij de universele pasvorm zijn ze geschikt voor vrijwel alle soorten en maten skischoenen. Kies voor comfort, stijl en flexibiliteit op de piste!
            </p>
            <a
              href="/waarom-overschoen"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg text-lg font-bold shadow-lg hover:bg-opacity-90 transition"
            >
              Lees meer
            </a>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="/images/Thermaguard_product1.png" alt="ThermaGuard Overschoen" className="w-48 h-48 object-contain rounded-lg shadow-lg bg-white" />
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
                alt="ThermaGuard - Extra warme skischoen hoes voor kinderen en volwassenen"
                width={60}
                height={60}
                className="mb-4 mx-auto md:mx-0 w-auto h-auto"
              />
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <p className="text-gray-300">
                Email: thermaguardnl@gmail.com
              </p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold mb-4">Menu</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-white">Over ons</Link></li>
                <li><Link href="/waarom-overschoen" className="text-gray-300 hover:text-white">Waarom onze overschoen?</Link></li>
                <li><a href="https://shop.thermaguard.nl/pages/contact" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">Contact</a></li>
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