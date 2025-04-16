'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header met navigatie */}
      <header className="bg-slate-800 text-white p-4">
        <nav className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <Link href="/" className="text-xl md:text-2xl font-bold">Thermaguard</Link>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <Link href="/" className="hover:text-gray-300">Home</Link>
              <Link href="/about" className="hover:text-gray-300">Over ons</Link>
              <Link href="/contact" className="hover:text-gray-300">Contact</Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Over Thermaguard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Team Foto */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64 md:h-96">
              <Image
                src="/images/team-photo.jpg"
                alt="Thermaguard Team"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-2">Ons Team</h2>
              <p className="text-gray-600">
                Bij Thermaguard werken we met een gepassioneerd team van experts in wintersport en thermische technologie. 
                Onze missie is om skiërs en snowboarders te helpen genieten van hun sport zonder last te hebben van koude voeten.
              </p>
            </div>
          </div>
          
          {/* Over Ons Informatie */}
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Onze Visie</h2>
            <p className="text-gray-600 mb-4">
              Thermaguard is ontstaan uit een passie voor wintersport en de wens om het probleem van koude voeten tijdens het skiën op te lossen. 
              We geloven dat comfort en warmte essentieel zijn voor een optimale ski-ervaring.
            </p>
            
            <h2 className="text-xl md:text-2xl font-bold mb-4">Onze Expertise</h2>
            <p className="text-gray-600 mb-4">
              Als specialisten in verwarmde skischoenen en thermische bescherming, bieden we waterdichte overschoenen voor skischoenen 
              en warmte-isolerende hoes voor skischoenen. Onze producten zijn ontworpen om koude voeten tijdens skiën te voorkomen.
            </p>
            
            <h2 className="text-xl md:text-2xl font-bold mb-4">Onze Toegevoegde Waarde</h2>
            <p className="text-gray-600">
              We bieden de beste oplossing voor koude voeten skiën met onze innovatieve producten. Onze thermische overschoen voor skiboots 
              en neopreen skischoen covers zorgen voor extra comfort en bescherming tegen extreme kou.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 