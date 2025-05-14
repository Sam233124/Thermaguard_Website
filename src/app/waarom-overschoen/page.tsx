'use client';

import React from 'react';
import Image from 'next/image';

export default function WaaromOverschoenPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Waarom onze overschoen?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Afbeelding */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
            <div className="relative h-64 w-full md:h-96">
              <Image
                src="/images/thermaguard-logo.png"
                alt="ThermaGuard Overschoen"
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-t-lg"
              />
            </div>
          </div>
          {/* Informatie */}
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Uniek in stijl en pasvorm</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Verkrijgbaar in verschillende kleuren, zodat je altijd een stijl vindt die bij jou past.
              </li>
              <li>
                Beschikbaar met diverse prints, zoals panterprint, voor een unieke en opvallende look op de piste.
              </li>
              <li>
                Universele pasvorm: onze overschoenen zijn geschikt voor verschillende soorten en maten skischoenen.
              </li>
            </ul>
            <p className="mt-6 text-gray-600">
              Met ThermaGuard kies je voor comfort, stijl en flexibiliteit. Onze overschoenen zijn ontworpen om jouw ski-ervaring te verbeteren, ongeacht je voorkeur of type skischoen.
            </p>
            <div className="mt-8 flex justify-center md:justify-start">
              <a
                href="https://shop.thermaguard.nl"
                className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:bg-opacity-90 transition text-center"
              >
                Bestel nu!
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 